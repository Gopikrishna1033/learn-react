import React from "react";
class Compd extends React.Component{
    render(){
        return <div>
            <h2>Component D</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <p>Employee_Name:{this.props.employee_details.ename}</p>
        </div>
    }
}
export default Compd