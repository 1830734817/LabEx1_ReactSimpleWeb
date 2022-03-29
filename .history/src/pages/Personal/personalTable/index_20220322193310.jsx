import React, { Component } from 'react'
import { Table,  Space, Button } from 'antd'
import PubSub from 'pubsub-js';
import axios from 'axios'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '性别',
    key: 'sex',
    dataIndex: 'sex',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>删除</a>
        <a>编辑</a>
        <button>确定</button>
      </Space>
    ),
  },
];

export default class PersonalTable extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
      count: 5
    }
    this.getPersonalData()
  }

  getPersonalData=()=>{
    axios.get('https://ebab06f9-1f87-466a-8bd0-4a35b792a513.mock.pstmn.io/personal').then(
        response =>{
            PubSub.publish('personalData',{data:response.data})
        },
        error =>{console.log('失败了',error);}
    )
  } 

  handleAdd = () => {
    const { data,count} = this.state;
    const newData = {
      key: count,
      name: `张三 ${count}`,
      age: '32',
      address: `西湖区湖底公园${count}号`,
    };
    this.setState({
      dataSource: [...data, newData],
      count: count + 1,
    });
  };

  componentDidMount(){
      this.token = PubSub.subscribe('personalData',(_,stateObj)=>{
          this.setState(stateObj)
        console.log(this.state)
        })
  }

  componentWillUnmount(){
      PubSub.unsubscribe(this.token)
  }
  
  render() {
    return (
        <div>
           <Button
            onClick={this.handleAdd}
            type="primary"
            style={{marginBottom: 16,}}
          >
            增加一条记录
          </Button>
          <Table columns={columns} dataSource={this.state.data} />
        </div>
    )
  }  
}
