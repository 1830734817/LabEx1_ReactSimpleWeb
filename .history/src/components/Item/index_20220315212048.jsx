import React, { Component } from 'react'
import './Index.css'

export default class Item extends Component {
  render() {
    const {id,name,done}=this.props;
    return (
    <li>
        <label>
            <input type="checkbox" checked={done}/>
            <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display:'none'}}>删除</button>
    </li>
    )
  }
}
