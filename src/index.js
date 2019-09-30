import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import { createBrowserHistory } from 'history'
import PrimaryLayout from './pages/primarylayout'
import Login from './pages/login'
import 'antd/dist/antd.css'
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory()

ReactDOM.render(
    <Router history={ history }>
      {/* <Route path="/" component={ PrimaryLayout }/> */}
      {/* 登录页面 */}
      <Route path="/" component={ Login }/>
    </Router>
    , document.getElementById('root')
    );

serviceWorker.unregister();
