/* import React from "react";
import Compc from "./Compc";
class CompB extends React.Component{
    
    render(){
        const {employee} = this.props
        return <div>
            <h2>Component B</h2>
            <p>employee id:{employee.eloc}</p>
            <hr />
            <Compc/>
        </div>
    }
}
export default CompB */

import Compc from "./Compc"

let CompB =(props)=>{

    return <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify
            (props)}</pre>
        <hr />

        <Compc emp = {props.emp} />
    </div>
}
export default CompB