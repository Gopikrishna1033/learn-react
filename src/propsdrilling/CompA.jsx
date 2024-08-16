import React from "react";
import CompB from "./CompB";
class CompA extends React.Component{
    emp = {
        eid:101,
        ename:"Ram",
        eloc:["Hyderabad","Banglore","Chennai","Gujarat","Kerala"]
    }
    render(){
        return <div>
            <h1>Component A</h1>
            <hr />
            <CompB employee = {this.emp}/>
        </div>
    }
}
export default CompA