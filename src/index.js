import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './components/App';
import Container from './components/container';
import Detail from './components/detail';
import Center from './components/center';
//移动端
import App_mobile from './m_components/app';
import Container_mobile from './m_components/container';
import Detail_mobile from './m_components/detail';
import Center_mobile from './m_components/center';
import { ElementQuery, Matches } from 'react-element-queries';
render(
  <ElementQuery queries={{ sm: { maxWidth: 1024 }, lg: { minWidth: 1024 } }}>
    <Matches lg>
      <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Container}></IndexRoute>
        <Route path='/detail/:uniquekey' component={Detail}/>
        <Route path='/center' component={Center}/>
      </Route>
    </Router>
    </Matches>
    <Matches sm>
      <Router history={hashHistory}>
        <Route path="/" component={App_mobile}>
          <IndexRoute component={Container_mobile}></IndexRoute>
          <Route path='/mdetail/:uniquekey' component={Detail_mobile}/>
          <Route path='/mcenter' component={Center_mobile}/>
        </Route>
      </Router>

    </Matches>
  </ElementQuery>


, document.getElementById('root'));