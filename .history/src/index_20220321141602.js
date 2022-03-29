//引入react核心库
import React from 'react'
//引入reactDOM
import ReactDOM from 'react-dom'

//引入App组件
import App from './10-mobx/04-router/App'

import {Provider} form 'mobx-react'


//渲染App组件到页面
ReactDOM.render(
    <Provider>
    <App/>

    </Provider>

,document.getElementById('root')
);
