import React, { Component } from 'react'
import Item from '../Item/Item'

export default class List extends Component {
  render() {
    return (
      <ul className="todo-main">
        <Item/>
      </ul>
    )
  }
}
