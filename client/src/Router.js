import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './Containers/LoginContainer';

const RouterComponent = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login}/>
    </div>
  </Router>
)

export default RouterComponent;