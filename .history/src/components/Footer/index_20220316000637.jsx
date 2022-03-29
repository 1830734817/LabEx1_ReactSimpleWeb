import React, { Component } from 'react'
import './index.css'

export default class footer extends Component {
  render() {
    const {todos}=this.props
    //已完成的个数
    const doneCount = todos.reduce((pre,todo)=>{
        return pre+(todo.done?1:0)
    },0)
    //总数
    const total = todos.length

    return (
    <div className="todo-footer">
      <label>
        <input type="checkbox"/>
      </label>
      <span>
        <span>已完成{doneCount}</span> / 全部{total}
      </span>
      <button className="btn btn-danger">清除已完成任务</button>
    </div>
    )
  }
}
