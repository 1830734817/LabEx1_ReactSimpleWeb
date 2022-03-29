import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd';

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

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    sex: 'male'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    sex: 'female'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    sex: 'male'
  },
];

export default class Table2 extends Component {
  render() {
    return (
      <Table columns={columns} dataSource={data} />
    )
  }
}
