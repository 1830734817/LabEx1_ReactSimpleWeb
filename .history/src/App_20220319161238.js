import React, { Component } from 'react'
import {Link,Router} from 'react-router-dom'//分别暴露

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
            
              {/* 在react中靠路由链接实现切换组件 */}
              <Router>
                <link className="list-group-item" to="/about">About</link>
                <link className="list-group-item" to="/home">Home</link>
              </Router>
             </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
  