import React, { useState } from 'react'

const Login = () => {
   let [user,setuser] = useState({email:"",Password:""})

   let emailHandler=(event)=>{
    setuser({...user, email:event.target.value})
   }

   let passwordHandler=(event)=>{
    setuser({...user, Password:event.target.value})
   }

   let submitHandler=(event)=>{
    event.preventDefault();
    console.log(user)
   }
  return (
    <div>
       <form action="" onSubmit={submitHandler}>
      <div className="container mt-5">
         <div className='form-group row mt-3'> 
            <label htmlFor="" className='col-form-label col-sm-1'>Email id:</label>
            <input type="email" className='form-control col-sm-3' onChange={emailHandler}/>
        </div>
        
        <div className='form-group row'>
             <label htmlFor="" className='
             col-form-label col-sm-1'>Password:</label>
        <input type="passwoord" className='form-control col-sm-3' onChange={passwordHandler}/>
        </div>
       
        <div>
            <button className='btn btn-primary col-sm-2' style={{marginLeft:81}} >Submit</button>
        </div>
      </div>
       
    </form>
    </div>
 
  )
}

export default Login