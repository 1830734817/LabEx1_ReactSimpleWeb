//引入react核心库
import React from 'react'
//引入reactDOM
import ReactDOM from 'react-dom'
//
import {HashRouter} from 'react-router-dom'
//引入App组件
import App from './App'


//渲染App组件到页面
ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById('root')
);
