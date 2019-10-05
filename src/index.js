import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import { createBrowserHistory } from 'history'
import PrimaryLayout from './pages/primarylayout'
import Login from './pages/login'
import Error from './pages/error'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import store from './redux'
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory()

ReactDOM.render(
   <Provider store={store}>
    <Router history={history}>
        {/* 使用路由的钩子函数 */}
        <Route path="/" component={PrimaryLayout}/>
        {/* 登录页面 */}
        <Route path="/login" component={Login} />
    </Router>
   </Provider> 
    , document.getElementById('root')
    );

serviceWorker.unregister();
