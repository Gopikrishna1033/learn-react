import React from "react";
import CompB from "./CompB";
class CompA extends React.Component{
    emp = {
        eid:101,
        ename:"Ram",
        esal:600000
    }
    render(){
        return <div>
            <h2>
                Component A
            </h2>
            <hr />
            <CompB Employee ={this.emp}/>
        </div>
    }
}
export default CompA