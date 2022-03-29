import React, { Component } from 'react'
import Item from '../Item/Item'
import './index.css'

export default class List extends Component {
  render() {
    const {todos}=this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=>{
              return <Item/>
          })
        }
      </ul>
    )
  }
}
