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
            
        
      </Menu>
    )
  }
}

