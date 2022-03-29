import React, { Component } from 'react'
import './App.css'
import Search from './components/Search/inedx'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search/>
        <div className="row">
          <div className="card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
          </div>
          <div className="card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
          </div>
          <div className="card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
          </div>
          <div className="card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
          </div>
          <div className="card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
          </div>
        </div>
      </div>
    )
  }
}
