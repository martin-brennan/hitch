import _ from 'lodash';
import 'lodash-deep';

class EventBus {
  constructor($window) {
    $window.Hitch = $window.Hitch || {};
    $window.Hitch.Events = {
      history: []
    };

    this.subscriptions = {};
    this.$window = $window;
  }

  /**
   * @param {string} eventName - The name of the event separated by colons.
   * @param {function} callback - The function called with the event payload when broadcasted.
   */
  subscribe(eventName, callback) {

    // make sure the event name is separated by dots.
    if (_.contains(eventName, ':')) {
      eventName = eventName.replace(/:/g, '.');
    }

    // set the object based on the deconstructed event name e.g.
    // hitch:event:name becomes { hitch: { event: { name: fn } } }
    _.deepSet(this.subscriptions, eventName, callback);
  }

  broadcast(eventName, payload) {
    eventName = eventName.replace(/:/g, '.');
    const event = _.deepGet(this.subscriptions, eventName);
    event(payload);

    this.$window.Hitch.Events.history.push(eventName);
  }
}

EventBus.$inject = ['$window'];

export default EventBus;
