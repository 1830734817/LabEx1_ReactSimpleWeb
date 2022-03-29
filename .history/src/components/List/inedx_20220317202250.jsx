import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    return (
        <div className="row">
            {
                this.props.users.map((userObj)=>{
                    return(
                        <div key={userObj.id} className="card">
                            <a rel="noreferrer" href="{userObj.html_url}" target="_blank">
                                <img alt="head_portrait" src="https://avatars.githubusercontent.com/u/4500659?v=4" style={{width: '100px'}}/>
                            </a>
                            <p className="card-text">{userObj.login}</p>
                        </div>
                    )
                })
            }
        </div>
    )
  }
}
