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
    dataIndex: 'sex',
    key: 'Se',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
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
    sex: '男',
    tags: 'nice'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    sex: '女',
    tags: 'loser'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    sex: '男',
    tags: 'cool'
  },
];

export default class Table1 extends Component {
  render() {
    return (
      <Table columns={columns} dataSource={data} />
    )
  }
}
