import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './components/App';
import Container from './components/container';
import Detail from './components/detail';
import Center from './components/center';
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Container}></IndexRoute>
      <Route path='/detail' component={Detail}/>
      <Route path='/center' component={Center}/>
    </Route>
  </Router>), document.getElementById('root'));