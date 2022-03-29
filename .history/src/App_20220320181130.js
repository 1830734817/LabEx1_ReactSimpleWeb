import React, { Component } from 'react'
import {Button} from 'antd'

export default class extends Component {
  render() {
    return (
      <div>
       <button>点我</button> 
       <Button type="primary">Primary Button</Button>
      </div>
    )
  }
}
