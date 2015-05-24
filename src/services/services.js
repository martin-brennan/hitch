import EventBus from './eventBus';

let servicesModule = null;
try {
  angular.module('hitch.services');
} catch (e) {
  servicesModule = angular.module('hitch.services', [])
                          .service('EventBus', EventBus);
}
export default servicesModule;
