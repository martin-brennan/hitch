import 'services/services';
import './eventTest/eventTest';

let anonymous = null;
try {
  angular.module('hitch.states.anonymous');
} catch (e) {
  anonymous = angular.module('hitch.states.anonymous', [
                       'hitch.services',
                       'hitch.states.anonymous.eventTest'
                     ])
                     .config(['$stateProvider', ($stateProvider) => {
                       $stateProvider.state('anonymous', {
                         abstract: true,
                         url: '/',
                         views: {
                           'hitchMain': {
                             template: `<div ui-view="anonymous">xxx</div>`
                           }
                         }
                       });
                     }]);
}
export default anonymous;
