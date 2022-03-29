//引入react核心库
import React from 'react'
//引入reactDOM
import ReactDOM from 'react-dom'
//引入App组件
import App from './App'
//引入路由
import {BrowserRouter} from 'react-router-dom'
// import {HashRouter} from 'react-router-dom'

//渲染App组件到页面
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ,document.getElementById('root')
);
