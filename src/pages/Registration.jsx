import React from 'react'

function Registration() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="card">
                    <div className="card-header">
                        <h2>Registration Page</h2>
                    </div>
                    <div className="card-body">
                        <form action="">
                             <div className='form-group'>
                            <input type="email" placeholder='Username' className='form-control'/>
                        </div>

                        <div className='form-group'>
                            <input type="password" name="" id="" placeholder='password' className='form-control'/>
                        </div> 
                        <div className="form-group">
                            <input type="date" className='form-control'/>
                        </div>
                        <div className="from-group">
                            <input type="checkbox" /> Please Accept T&C
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