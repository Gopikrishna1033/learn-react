/* geting the data and displaying it use useEffect hook in Functional Component */
import React, { useEffect, useState } from 'react'
import axios from "axios"
function Axios() {
  let [msg,setmsg] = useState([])
  useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((resp)=>{
    setmsg(resp.data)
  })
  .catch(()=>{})
  })
  return (
    <div className='container mt-4'>
      {/* <h2>Axios </h2> */}
{/*       <pre>{JSON.stringify(msg)}</pre> */}
      {
        msg.length>0?<div>
          <table className='table table-bordered table-striped  table-hover' >
            <thead className='thead-dark'>
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
        </div>:<h2>No data</h2>
      }
    </div>
  )
}

export default Axios