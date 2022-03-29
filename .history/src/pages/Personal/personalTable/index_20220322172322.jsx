import React, { Component } from 'react'
import { Table,  Space } from 'antd'
import PubSub from 'pubsub-js';
import axios from 'axios'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Sex',
    key: 'sex',
    dataIndex: 'sex',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Add</a>
        <a>Delete</a>
        <a>Edit</a>
        <button>确定</button>
      </Space>
    ),
  },
];

export default class PersonalTable extends Component {
    getPersonalData=()=>{
        axios.get('https://ebab06f9-1f87-466a-8bd0-4a35b792a513.mock.pstmn.io/personal').then(
            response =>{
                PubSub.publish('personalData',{data:response.data})
            },
            error =>{console.log('失败了',error);}
        )
    } 

    state={
        data:[]
    }

    constructor(props){
        super(props)
        this.getPersonalData()
    }

    componentDidMount(){
        this.token = PubSub.subscribe('personalData',(_,stateObj)=>{
           this.setState(stateObj)
         })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
      }
  
   render() {
       console.log(this)
    return (
        <Table columns={columns} dataSource={this.state.data} />
    )
  }  
}
