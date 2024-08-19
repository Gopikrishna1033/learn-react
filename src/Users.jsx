import { useState } from "react"
import axios from "axios"
let Users = ()=>{
    let[msg,setmsg] = useState([])

    let getUsers = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((resp)=>{
                console.log("resp")
                console.log(resp.data)
                setmsg(resp.data)
            })
            .catch((err)=>{

            })
        
    }

    return <div>
        <h3>Users data</h3>
        <button onClick={getUsers}> Get Users</button>
        <pre>{JSON.stringify(msg)}</pre>
                {
                    msg.length>0? <div>
                                    <table border={2}>
                                        <thead>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                        </thead>
                                            <tbody>
                                                {
                                                    msg.map((user)=>{
                                                        return <tr>
                                                            <td>{user.id}</td>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>

                                                        </tr>
                                                    })
                                                }
                                            </tbody>
                                    </table>
                    </div>: <h2>No data</h2>
                }
    </div>
}
export default Users