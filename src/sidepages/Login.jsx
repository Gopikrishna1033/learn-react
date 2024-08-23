import React, { useState } from 'react'

function Login() {
    let [user,setuser] = useState({email:"",password:""})

    let updateHandler = (event)=>{
        setuser({...user,[event.target.name]:event.target.value})
    }
    let submitHandler = (event)=>{
        event.preventDefault()
        console.log(user)
    }
  return (
    <div>
        {/* <pre>{JSON.stringify(user)}</pre> */}
        <div className="container mt-5">
            <form action="" onSubmit={submitHandler}>
                <div className="form-group row">
                    <label htmlFor="" className='col-form-label col-sm-1 '>Email:</label>
                    <input type="email" className='form-control col-sm-3' name='email' onChange={updateHandler}/>
                </div>

                <div className="form-group row">
                    <label htmlFor="" className='col-form-label col-sm-1'>Password:</label>
                    <input type="password" className='form-control col-sm-3' name='password' onChange={updateHandler}/>
                </div>
                <div className='form-group'>
                    <button className='form-control col-sm-3 btn btn-primary' style={{marginLeft:80}}>Submit</button>
                </div>
            </form>
           
        </div>
        
    </div>
  )
}

export default Login