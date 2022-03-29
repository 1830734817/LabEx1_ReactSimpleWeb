//引入react核心库
import React from 'react'
//引入reactDOM
import ReactDOM from 'react-dom'

//引入App组件
import App from './10-mobx/04-router/App'

import {Provider} from 'mobx-react'
import store from './10-mobx/04-router/mbox/store'


//渲染App组件到页面
ReactDOM.render(
    <Provider store={store}>
    <App/>

    </Provider>

,document.getElementById('root')
);
