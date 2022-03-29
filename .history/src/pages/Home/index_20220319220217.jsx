import React, { Component } from 'react'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a class="list-group-item" href="./home-news.html">News</a>
            </li>
            <li>
              <a class="list-group-item active" href="./home-message.html">Message</a>
            </li>
          </ul>

        </div>
      </div>

    )
  }
}
