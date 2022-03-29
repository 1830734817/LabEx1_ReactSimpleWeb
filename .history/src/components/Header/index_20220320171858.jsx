import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className="page-header">
          <h2>React Router Demo</h2>
          <button onClick={this.back}>回退</button>
          <button onClick={this.forward}>前进</button>
          <button onClick={this.go}>go</button>
        </div>

      )
  }
}
