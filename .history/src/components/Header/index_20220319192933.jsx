import React, { Component } from 'react'

export default class Header extends Component {
  render() {
      console.log(this.props)
    return (
        <div className="page-header"><h2>React Router Demo</h2></div>
    )
  }
}
