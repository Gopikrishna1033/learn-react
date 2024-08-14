/* import React from "react";
class Eventbinding extends React.Component{
    state = {
        msg:"Hello"
    }
    click = (value)=>{
        this.setState({msg:value})
    }

    render(){
        return <div>
            <h2>Event Binding</h2>
            <p><b>Value:</b>{this.state.msg}</p>
            <button onClick={this.click.bind(this,"Love you") }>Click</button>
            <button onClick={this.click.bind(this,"you love me???")}>Clickme</button>
            <button onClick={this.click.bind(this,"Hello")}>intial_val</button>
        </div>
    }
}
export default Eventbinding  */

// Using Functional Component
import React, {useState} from "react"
let Eventbinding = ()=>{
    let [msg,setmsg] = useState("Hello")
    let click = (value)=>{
        console.log(value)
        setmsg(value)
    }
    return <div>
        <h2>Event Binding</h2>
        <p><b>Value:</b>{msg}</p>
        <button onClick={click.bind(null,"love you")}>click</button>
        <button onClick={click.bind(null,"You Love me???")}>clickme</button>
        <button onClick={click.bind(null,"Hello")}>initial</button>
    </div>
}
export default Eventbinding