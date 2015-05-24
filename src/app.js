import ServicesModule from './services/services';
import States from './states/states';

class Hitch {
  constructor() {
    angular.module('hitch', [
      'ui.router',
      'hitch.services',
      'hitch.states'
    ])
    .config(['$locationProvider', ($locationProvider) => {
      this.configure($locationProvider);
    }])
    .run(['$window', ($window) => {
      this.initialize($window);
    }]);
  }

  configure($locationProvider) {
    $locationProvider.html5Mode(true);
  }

  initialize($window) {
    $window.Hitch = {
      v: '0.0.1'
    }
  }
}

export default Hitch;
