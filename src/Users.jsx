import React, { Component } from 'react'
import axios from "axios"
import "./message.css"
export class Users extends Component {
    state = {
        msg:[]
    }
    getUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{
            this.setState({msg:resp.data})
        })
        .catch(()=>{
            
        })
    }
  render() {
    return (
      <div>
        <h2>User Component</h2>
        <pre>{JSON.stringify(this.state.msg)}</pre>
        <button onClick={this.getUsers}>Click me</button>
        {
            this.state.msg.length>0?<div>
                <table border={2} className='user'>
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {
                            this.state.msg.map((user)=>{
                                return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>:<h2>No data</h2>
        }
      </div>
    )
  }
}

export default Users