import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  //状态在哪里，操作状态的方法就在那里

  //初始化状态
  state = {
    todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:true},
      {id:'003',name:'打代码',done:false},
      {id:'004',name:'逛街',done:true},
    ]
  }

  //addTodo用于添加一个todo，接收的参数是todo对象
  addTodo=(todoObj)=>{
      //获取原todos
      const {todos} = this.state
      //追加一个todo
      const newTodos = [todoObj,...todos]
      //更新状态
      this.setState({todos:newTodos})
  }


  updateTodo=(id,done)=>{
    //获取状态的todos
    const{todos}=this.state
    const newTodos=todos.map((todoObj)=>{
      if(todoObj.id===id)return{...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }


  //用于删除一个todo
  deleteTodo=(id)=>{
    const{todos}=this.state
    //数组过滤
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id!==id
    })
    //更新状态
    this.setState({todos:newTodos})
  }

  checkAllTodo=()=>{
    const {todos}=this.state
    const newTodos=todos.map((todoObj)=>{
      return {...todoObj,done:true}
    })
    this.setState({todos:newTodos})
  }


  render() {
    const {todos}=this.state
    return (
        <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos}/>
        </div>
      </div>
    )
  }
}

