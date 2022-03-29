import React, { Component } from 'react'
import { Menu} from 'antd'

const { SubMenu } = Menu;

export default class Nav extends Component {
  render() {
    return (
        <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1"  title="Navigation One">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}
