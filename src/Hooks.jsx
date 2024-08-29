import React, { useState } from 'react'

function Hooks() {
    let [counter,setcounter]=useState(1)
    let[fact,setfact]=useState(4)
  return (
    <div>
        <div className="container">
            <button>countervalue{1}</button>
        <button>Factorialvalue{4}</button>
        </div>
        
    </div>
  )
}

export default Hooks