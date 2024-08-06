import React from "react";
import CompB from "./CompB";
class CompA extends React.Component{

    render(){
        return <div>
            <h2>ComponentA</h2>
            <hr />
            <CompB/>
        </div>
    }
}
export default CompA;