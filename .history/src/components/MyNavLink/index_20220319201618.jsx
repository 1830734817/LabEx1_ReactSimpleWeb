import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    const {to,name} = this.props
    return (
        <NavLink activeClassName="atguigu" className="list-group-item" to="/{to}">{name}</NavLink>
    )
  }
}
