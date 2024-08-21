import React, { useState } from 'react'

const Login = () => {
   
  return (
    <form action="">
        <div className='form-group row mt-3'> 
            <label htmlFor="" className='col-form-label col-sm-1'>Email id:</label>
            <input type="email" className='form-control col-sm-3' />
        </div>
        
        <div className='form-group row'>
             <label htmlFor="" className='
             col-form-label col-sm-1'>Password:</label>
        <input type="Passwoord" className='form-control col-sm-3'/>
        </div>
       
        <div>
            <button className='btn btn-primary ml-3 col-sm-2'>Submit</button>
        </div>
    </form>
  )
}

export default Login