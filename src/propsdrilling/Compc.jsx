import React from "react";
import Compd from "./Compd";
class Compc extends React.Component{

    render(){
        return <div>
            <h2>Component C</h2>

            <pre>{JSON.stringify(this.props)}</pre>
            <Compd employee_details={this.props.Emp}/>
        </div>

    }
}
export default Compc