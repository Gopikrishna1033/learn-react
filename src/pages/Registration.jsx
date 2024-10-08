import React, { useState } from 'react'

function Registration() {
    let [user,setuser] = useState({email:"",password:"",date:""})
    
    let updateHandler = (event)=>{
        setuser({...user,[event.target.name]:event.target.value})
    }
    let submitHandler=(event)=>{
        event.preventDefault();
        console.log(user)
    }

  return (
    <div>
       {/*  <pre>{JSON.stringify(user)}</pre> */}
        <div className="container mt-5">
            <div className="row " style={{marginLeft:350}}>
                <div className="card">
                    <div className="card-header">
                        <h2>Registration Page</h2>
                    </div>
                    <div className="card-body">
                        <form action="" onSubmit={submitHandler}>
                             <div className='form-group'>
                            <input type="email" placeholder='Username' className='form-control' name='email' onChange={updateHandler}/>
                        </div>

                        <div className='form-group'>
                            <input type="password" name="password" id="" placeholder='password' className='form-control' onChange={updateHandler}/>
                        </div> 
                        <div className="form-group">
                            <input type="date" className='form-control' name='date' onChange={updateHandler}/>
                        </div>
                        <div className="from-group">
                            <input type="checkbox" /> Please Accept T&C
                        </div>
                        <div className="form-group">
                            <button className='btn btn-primary form-control mt-3'> Submit</button>
                        </div>
                        </form>
                      
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Registration