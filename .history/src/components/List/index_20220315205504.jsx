import React, { Component } from 'react'
import Item from '../Item/Item'
import './index.css'

export default class List extends Component {
  render() {
    console.log(this.props.b)
    return (
      <ul className="todo-main">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </ul>
    )
  }
}
