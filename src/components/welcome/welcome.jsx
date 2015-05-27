import React from 'react';
var Router = require('react-router');
var Link = Router.Link;

class Welcome extends React.Component {
  render() {
    return (<p>Welcome to <strong>Hitch</strong>, the open-source issue tracker. <Link to="issues">Go to my issues</Link></p>)
  }
}

export default Welcome;
