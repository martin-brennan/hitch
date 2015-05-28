import React from 'react';
import EventBus from './services/eventBus';
import API from './services/api';
import Welcome from 'components/welcome/welcome';
import Issues from 'components/issues/issues';

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

class Hitch extends React.Component {
  // constructor() {
  //   window.Hitch = window.Hitch || {};
  //
  //   window.Hitch.version = '0.0.1';
  //   window.Hitch.API     = API;
  // }
  render() {
    return (
      <div id="hitch">
        <header>
          <h1>Hitch</h1>
        </header>
        <RouteHandler />
      </div>
    );
  }
}

var routes = (
  <Route name="app" path="/" handler={Hitch}>
    <DefaultRoute handler={Issues}/>
    <Route name="issues" handler={Issues}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, document.body);
});

export default Hitch;
