import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './router/index';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
ReactDOM.render(
    // 这层标签 react执行了严格模式
    // <React.StrictMode>
    <Router>
        <Switch>
            <Routers />
        </Switch>
    </Router>,
    // </React.StrictMode>
    document.getElementById('root')
);
