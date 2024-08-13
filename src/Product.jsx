/* import React from "react";
class Product extends React.Component{
    state={
        quantity:1
    }
    increment = ()=>{
        this.setState({quantity:this.state.quantity+1})
    }
    decrement = ()=>{
        this.setState({quantity:this.state.quantity-1})
    }
    render(){
        return <div>
            <h1>Product Component</h1>
            <button onClick={this.increment}>+</button>
             {this.state.quantity} 
             <button onClick={this.decrement}>-</button>
        </div>
    }
}
export default Product */

import React, { useState } from "react"

let Product = ()=>{
    let [quantity,setmsg] = useState(0)
    
    let clickHandler = ()=>{
        setmsg(quantity+1)
    }
    let clickmeHandler = ()=>{
        setmsg(quantity-1)
    }

    return <React.Fragment>
        <h2>Product Component</h2>
        {/* <p>Quantity:<b>{quantity}</b></p> */}
        <br />
        <button onClick={clickHandler}>+</button><b>{quantity}</b>
        <button onClick={clickmeHandler}>-</button>
    </React.Fragment>
}
export default Product