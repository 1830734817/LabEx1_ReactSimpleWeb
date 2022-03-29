import React, { Component } from 'react'
import Item from '../Item/Index'
import './index.css'

export default class List extends Component {
  render() {
    const {todos}=this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=>{
              return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>
          })
        }
      </ul>
    )
  }
}
