import React, { Component } from 'react'
import {Button} from 'antd'
import 'antd/dist/antd.css'

export default class extends Component {
  render() {
    return (
      <div>
       <button>点我</button> &nbsp;
       <Button type="primary">按钮1</Button>
       <Button >按钮2</Button>
       <Button type="link">按钮3</Button>
      </div>
    )
  }
}
