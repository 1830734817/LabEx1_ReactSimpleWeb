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
              <Menu.Item key="1">
                <Link to="/Table1">Option 1</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/Table2">Option 2</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/Table3">Option 3</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/Table4">Option 4</Link>
              </Menu.Item>
      </Menu>
    )
  }
}

