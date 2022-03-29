import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu} from 'antd'


export default class Nav extends Component {
  render() {
    return (
        <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        mode="inline"
      >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
      </Menu>
    )
  }
}

