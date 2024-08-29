import React, { useRef, useState } from 'react'

function Signup() {
    let[user,setuser] = useState({email:"", password:"",date:""})
    let btn = useRef()

    let updateHandler=(event)=>{
        setuser({...user,[event.target.name]:event.target.value})
    }
    let submitHandler=(event)=>{
        event.preventDefault()
        console.log(user)
    }
    let inputHandler=(event)=>{

        btn.current.disabled=!event.target.checked 
        /* if(event.target.checked){
            btn.current.disabled=false
        }
        else{
            btn.current.disabled=true   
        } */
    }

  return (
    <div>
       {/*  <pre>{JSON.stringify(user)}</pre> */}
        <div className="container ">
            <div className="row" style={{marginLeft:300,marginTop:110}}>
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
                            <textarea rows={4} className='form-control' placeholder='Address'></textarea>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" onChange={inputHandler} className='form-check-input'/> Please accept the terms and conditions
                        </div>
                        <div className="form-group">
                            <button className='form-control btn btn-primary mt-3' disabled ref={btn}>Submit</button>

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