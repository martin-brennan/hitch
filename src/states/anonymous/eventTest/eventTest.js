import EventTestController from './eventTestController';

let eventTest = null;
try {
  angular.module('hitch.states.anonymous.eventTest');
} catch (e) {
  eventTest = angular.module('hitch.states.anonymous.eventTest', [])
         .controller('EventTestController', EventTestController)
         .config(['$stateProvider', ($stateProvider) => {
           $stateProvider.state('anonymous.eventTest', {
              url: '',
              views: {
               'anonymous@anonymous': {
                 template: `<input type="text" ng-model="anon.name" /><button ng-click="anon.sendEvent()">Go</button><br/>
                            <ul>
                              <li ng-repeat="message in anon.messages track by $index">{{message}}</li>
                            </ul>`,
                 controller: 'EventTestController',
                 controllerAs: 'anon'
               }
             }
           });
         }]);
}
export default eventTest;
