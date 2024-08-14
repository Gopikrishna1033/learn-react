import { useState } from "react"

let Handlers = ()=>{
    let [msg,setmsg] = useState("Hello")
    let Clickme = ()=>{
        setmsg("Love You")
    }

    let click = ()=>{
        setmsg ("you love me???")
    }
    
    let origin = ()=>{
        setmsg("Hello")
    }

    return <div>
        <h2>Handlers</h2>
        <p><b>Value:</b>{msg}</p>
        <button onClick={Clickme}>clickme</button>
        <button onClick={click}>click</button>
        <button onClick={origin}>intial</button>
    </div>
}
export default Handlers