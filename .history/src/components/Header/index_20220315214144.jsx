import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
  
  
  handleKeyUp=(event)=>{
    //解构赋值获取keyCode,target
    const {keyCode,target} = event
    //判断是否是回车按键
    if(keyCode!==13) return
      console.log(target.value)
      this.props.addTodo(target.value)
  }
  
  render() {
    console.log(this.props.a)
    return (
    <div className="todo-header">
      <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
    </div>
    )
  }
}
