import React, { Component } from 'react'
import { Input } from 'antd'
import PubSub from 'pubsub-js'


const { Search } = Input;

export default class PersonalSearch extends Component {
  state={
    searchName:''
  }
  onSearch = value =>{ 
    console.log(value)
  };
  render() {
    return (
        <Search  onSearch={onSearch} placeholder="输入想要查找信息的Name" allowClear style={{ width: 400,marginLeft:25+'vw',marginTop:4+'vh',marginBottom:2+'vh'}} enterButton />
    )
  }
}
