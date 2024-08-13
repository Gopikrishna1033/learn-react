import { useState } from "react"

function FunctionState(){
    let [msg,setmsg] = useState("Hello")
    let clickHandler = ()=>{
        setmsg("welcome to ReactJS")
    }
    let clickmeHandler = ()=>{
        setmsg("Happy Learning")
    }
    return <div>
        <h2>Functional State Component</h2>
        <h3>value:{msg}</h3>
        <button onClick={
            clickHandler
        }>Click</button>
        <button onClick={clickmeHandler}>Clickme</button>
    </div>
}
export default FunctionState