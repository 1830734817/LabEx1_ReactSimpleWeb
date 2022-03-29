import React, { Component } from 'react'
import './Index.css'

export default class Item extends Component {

  state={mouse:false}

  handleMouse=(flag)=>{
    return()=>{
      this.setState({mouse:flag})
    }
  }

  render() {
    const {name,done}=this.props;
    return (
    <li  onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
            <input type="checkbox" defaultChecked={done}/>
            <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display:'none'}}>删除</button>
    </li>
    )
  }
}
