import React, { Component } from 'react'
import {Button, DatePicker} from 'antd'
import {WechatOutlined,SearchOutlined} from '@ant-design/icons'


export default class extends Component {
  render() {
    return (
      <div>
       <button>点我</button> &nbsp;
       <Button type="primary">按钮1</Button>
       <Button >按钮2</Button>
       <Button type="link">按钮3</Button>
       <Button type="primary" icon={<SearchOutlined />}>
         Search
       </Button>
       <WechatOutlined />
       <DatePicker  />
      </div>
    )
  }
}
