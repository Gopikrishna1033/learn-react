import React, { useState } from 'react'

function Signup() {
    let[user,setuser] = useState({email:"", password:"",date:""})

    let updateHandler=(event)=>{
        setuser({...user,[event.target.name]:event.target.value})
    }
    let submitHandler=(event)=>{
        event.preventDefault()
        console.log(user)
    }
  return (
    <div>
       {/*  <pre>{JSON.stringify(user)}</pre> */}
        <div className="container mt-5">
            <div className="row" style={{marginLeft:300}}>
                <div className="card">
                    <div className="card-header">
                        <h2>Register Your Details</h2>
                    </div>
                    <div className="card-body">
                        <form action="" onSubmit={submitHandler}>
                            <div className="form-group">
                            <input type="email" className='form-control' placeholder='Username' name='email' onChange={updateHandler}/>
                        </div>
                        <div className='form-group'>
                            <input type="password" className='form-control' placeholder='Password' name='password' onChange={updateHandler}/>
                        </div>
                        <div className="form-group">
                            <input type="date" className='form-control' name='date' onChange={updateHandler}/>
                        </div>
                        <div className="form-group">
                            <button className='form-control btn btn-primary'>Submit</button>

                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup