import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'

import './App.css'

export default class App extends Component {
  render() {
    return (
        <div className="todo-container">
        <div className="todo-wrap">
          <Header/>
          <List/>
          <div className="todo-footer">
            <label>
              <input type="checkbox"/>
            </label>
            <span>
              <span>已完成0</span> / 全部2
            </span>
            <button className="btn btn-danger">清除已完成任务</button>
          </div>
        </div>
      </div>
    )
  }
}

