import React from 'react';
import EventBus from './services/eventBus';
import API from './services/api';
import Welcome from 'components/welcome/welcome';
import Issues from 'components/issues/issues';

// import the router for use with API route initialization.
const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Link = Router.Link;
const Route = Router.Route;
const RouteHandler = Router.RouteHandler;

class Hitch extends React.Component {
  constructor(props, context) {
    super(props, context);

    window.Hitch = window.Hitch || {};

    window.Hitch.version = '0.0.1';
    window.Hitch.API     = new API("localhost:49793");
  }

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

// define routes and run the router
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
