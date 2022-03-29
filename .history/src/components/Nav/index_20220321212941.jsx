import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { Menu} from 'antd'


export default class Nav extends Component {
  render() {
    console.log(this)
    return (
        <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        mode="inline"
      > 

              <Menu.Item key="1">
                <NavLink to="/Table1">Option 1</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/Table2">Option 2</NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/Table3">Option 3</NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink to="/Table4">Option 4</NavLink>
              </Menu.Item>
      </Menu>
    )
  }
}

