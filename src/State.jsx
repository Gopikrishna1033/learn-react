import React, { Fragment } from "react";
class State extends React.Component{
   /*  msg = "Hello"
    clickHandler=()=>{
        this.msg = "Gopi i love you"
        console.log("Gopi i love you")
        this.forceUpdate()
    }
    clickmeHandler=()=>{
        this.msg = "Let's get Married"
        console.log("Let's get Married")
        this.forceUpdate()
    } */

    state={
        msg : "Hello"
    }
    clickHandler=()=>{
        this.setState({msg:"I Love you so Much"})
    }
    clickmeHandler=()=>{
        this.setState({msg:"wiil You marry me"})
    }
    msg=()=>{
        this.setState({msg:"Hello"})
    }
    render(){
            return <Fragment>
                <h2>Message Component</h2>
                <p><b>Wish:</b>{this.state.msg}</p>
                <button onClick={this.clickHandler

                }>Click</button>
                <button onClick={this.clickmeHandler}>Click Me</button>
                <button onClick={this.msg}>Click Me</button>
            </Fragment>
    }
}
export default State