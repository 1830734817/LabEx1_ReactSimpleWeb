import React, { Component } from 'react'
import './Index.css'

export default class Item extends Component {
  render() {
    const {name,done}=this.props;
    return (
    <li onMouseLeave={this.handleMouse(false) onMouseEnter={this.handleMouse(true)}}>
        <label>
            <input type="checkbox" defaultChecked={done}/>
            <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display:'none'}}>删除</button>
    </li>
    )
  }
}
