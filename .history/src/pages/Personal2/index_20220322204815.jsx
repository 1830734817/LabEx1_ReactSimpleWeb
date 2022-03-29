import React, { Component } from 'react'
import Personal2Table from './Personal2Table/index'
import Personal2Search from './Personal2Search/index'

export default class Personal2 extends Component {
  render() {
    return (
      <div>
        <Personal2Search/>
        <Personal2Table/>
      </div>
    )
  }
}
