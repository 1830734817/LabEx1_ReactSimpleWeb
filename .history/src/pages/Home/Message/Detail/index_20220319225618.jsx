import React, { Component } from 'react'


const DetailData = [
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，尚硅谷'},
    {id:'03',content:'你好，未来的自己'},
]

export default class Detail extends Component {
  render() {
      console.log(this.props);
    return (
      <div>
          <ul>
              <li>ID:</li>
              <li>TITLE:</li>
              <li>COTENT:</li>
          </ul>
      </div>
    )
  }
}
