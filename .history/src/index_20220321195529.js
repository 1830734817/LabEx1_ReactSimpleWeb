//引入react核心库
import React from 'react'
//引入reactDOM
import ReactDOM from 'react-dom'
//引入App组件
import App from './App'

import { Menu} from 'antd'
import 'antd/dist/antd.css' 


//渲染App组件到页面
ReactDOM.render(
    <App/>
    ,document.getElementById('root')
);
