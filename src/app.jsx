import React from 'react';
import EventBus from './services/eventBus';
import Welcome from 'components/welcome/welcome';
import Issues from 'components/issues/issues';

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

class Hitch extends React.Component {
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
    <DefaultRoute handler={Welcome}/>
    <Route name="issues" handler={Issues}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, document.body);
});

export default Hitch;
