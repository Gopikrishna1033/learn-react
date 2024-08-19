import React from "react";
import Compc from "./Compc";
class CompB extends React.Component{
    render(){
        return <div>
                <h2>Component B</h2>
                <pre>
                    {JSON.stringify(this.props)}
                </pre>
                <hr />
                <Compc Emp = {this.props.Employee}/>
        </div>
    }
}
export default CompB