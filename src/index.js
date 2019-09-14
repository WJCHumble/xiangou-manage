import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import PrimaryLayout from './pages/primarylayout'
import 'antd/dist/antd.css'
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory()

ReactDOM.render(
    <Router history={ history }>
		<Route path="/" component={ PrimaryLayout }/>
    </Router>
    , document.getElementById('root')
    );

serviceWorker.unregister();
