import React, { Component } from 'react'
import { Table,  Space } from 'antd'
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

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     sex: 'male'
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     sex: 'female'
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     sex: 'male'
//   },
// ];

const getPersonalData=()=>{
    axios.get('https://ebab06f9-1f87-466a-8bd0-4a35b792a513.mock.pstmn.io/personal').then(
        response =>{
            const data = response.data;
            console.log(response.data)

        },
        error =>{console.log('失败了',error);}
    )
} 

getPersonalData=()


export default class PersonalTable extends Component {
  render() {
    return (
        <h2>tset</h2>
        // <Table columns={columns} dataSource={data} />
    )
  }
}
