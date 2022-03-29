import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <a className="list-group-item" href="./home-news.html">News</a>
            </li>
            <li>
              <a className="list-group-item" href="./home-message.html">Message</a>
            </li>
          </ul>
          {/* 注册路由 */}

        </div>
      </div>

    )
  }
}
