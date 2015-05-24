import './anonymous/anonymous';

let states = null;
try {
  angular.module('hitch.states');
} catch (e) {
  states = angular.module('hitch.states', [
    'ui.router',
    'hitch.states.anonymous'
  ]);
}
export default states;
