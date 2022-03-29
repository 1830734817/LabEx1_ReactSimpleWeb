import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu} from 'antd'


export default class Nav extends Component {
  render() {
    return (
        <Menu
        onClick={this.handleClick}
        style={{ width: "16.5%" }}
        defaultSelectedKeys={['1']}
        mode="inline"
      >
            <Link to="/Table1">
              <Menu.Item key="1">Option 1</Menu.Item>
            </Link>
            <Link to="/Table2">
              <Menu.Item key="2">Option 2</Menu.Item>
            </Link>
            <Link to="/Table3">
              <Menu.Item key="3">Option 3</Menu.Item>
            </Link>
            <Link to="/Table4">
              <Menu.Item key="4">Option 4</Menu.Item>
            </Link>
      </Menu>
    )
  }
}

