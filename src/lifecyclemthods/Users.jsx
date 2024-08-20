/* geting the data and displaying it use componentDidMount in Class Component */
import React, { Component } from 'react'
import axios from "axios"
export class Users extends Component {
    state={
        msg:[]
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{
                this.setState({msg:resp.data})
        })
        .catch(()=>{})
    }
  render() {
    return (
      <div>
        <h2>User Component</h2>
        {/* <pre>{JSON.stringify(this.state.msg)}</pre> */}
        {
            this.state.msg.length>0?<div>
                <table border={2}>
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