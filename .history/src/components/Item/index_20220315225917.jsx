import React, { Component } from 'react'
import './Index.css'

export default class Item extends Component {

  state={mouse:false}

  handleMouse=(flag)=>{
    return()=>{
      this.setState({mouse:flag})
    }
  }

  handleCheck=(id)=>{
      return (event)=>{
          this.props.updateTodo(id,event.target.checked)
      }
  }

  handleDelete=(id)=>{
    // this.props.deleteTodo(id)
  }

  render() {
    const {id,name,done}=this.props;
    const {mouse}=this.state
    return (
    <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
            <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
            <span>{name}</span>
        </label>
        <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
    </li>
    )
  }
}
