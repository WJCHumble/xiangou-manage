import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './configs/route.config'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Routes/>
    </div>
    , document.getElementById('root')
    );

serviceWorker.unregister();
