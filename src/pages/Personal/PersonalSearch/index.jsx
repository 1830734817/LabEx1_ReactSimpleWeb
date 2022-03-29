import React, { Component } from 'react'
import { Input } from 'antd'
import PubSub from 'pubsub-js'


const { Search } = Input;

export default class PersonalSearch extends Component {
  onSearch = (value) =>{ 
    PubSub.publish('searchName',{searchName:value})
  };
  render() {
    return (
        <Search  onSearch={this.onSearch} placeholder="输入想要查找的姓名" allowClear style={{ width: 400,marginLeft:25+'vw',marginTop:4+'vh',marginBottom:2+'vh'}} enterButton />
    )
  }
}
