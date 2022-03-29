//引入react核心库
import React from 'react'
//引入reactDOM
import ReactDOM from 'react-dom'
//引入App组件
import App from './App'
//引入路由
import {BrowserRouter} from 'react-router-dom'
// import {HashRouter} from 'react-router-dom'

//引入mobx仓库
import store from './stores/store'
import { Provider } from "mobx-react"


//渲染App组件到页面
ReactDOM.render(
    <Provider storeP={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ,document.getElementById('root')
    </Provider>
);
