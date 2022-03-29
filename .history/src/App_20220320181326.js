import React, { Component } from 'react'
import {Button} from 'antd'
import 'antd/dist/antd.css'

export default class extends Component {
  render() {
    return (
      <div>
       <button>点我</button> &nbsp;
       <Button type="primary">Primary Button</Button>
      </div>
    )
  }
}
