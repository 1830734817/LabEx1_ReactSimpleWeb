import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/Index'
import './index.css'

export default class List extends Component {


  static propTypes={
    todo:PropTypes.array.isrequired,
    updateTodo:PropTypes.func.isrequired,
  }

  render() {
    const {todos,updateTodo}=this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=>{
              return <Item key={todo.id} {...todo} updateTodo={updateTodo}/>
          })
        }
      </ul>
    )
  }
}
