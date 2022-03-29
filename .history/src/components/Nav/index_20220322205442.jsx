import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { Menu} from 'antd'


export default class Nav extends Component {
  render() {
    return (
        <Menu
        onClick={this.handleClick}
        style={{ width: 15+'vw' }}
        defaultSelectedKeys={['1']}
        mode="inline"
      > 
              <Menu.Item key="1">
                <NavLink to="/Personal">个人信息</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/Personal2">个人信息2</NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/Table3">Option 3</NavLink>
              </Menu.Item>
      </Menu>
    )
  }
}

