import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    return (
        <div className="row">
            <div className="card">
            <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
                <img alt="head_portrait" src="Nora.jpg" style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
            </div>
            <div className="card">
            <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
                <img alt="head_portrait" src="./Nora.jpg" style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
            </div>
            <div className="card">
            <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
                <img alt="head_portrait" src="./Nora.jpg" style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
            </div>
            <div className="card">
            <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
                <img alt="head_portrait" src="./Nora.jpg" style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
            </div>
            <div className="card">
            <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
                <img alt="head_portrait" src="./Nora.jpg" style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
            </div>
        </div>
    )
  }
}
