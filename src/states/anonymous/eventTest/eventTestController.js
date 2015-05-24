class EventTestController {
  constructor(EventBus) {
    this.name = 'hi';
    this.messages = [];
    this.EventBus = EventBus;

    EventBus.subscribe('hitch:test', (name) => {
      this.messages.push(`Hello, ${name}`);
    });
  }

  sendEvent() {
    this.EventBus.broadcast('hitch:test', this.name);
  }
}

EventTestController.$inject = ['EventBus'];

export default EventTestController;
