/* let Employee = (props)=>{

    return <div>
        <h2>Employee Component</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h4>User id:{props.uid}</h4>
        <h4>User name:{props.uname}</h4>
    </div>
}
export default Employee; */

import React from "react";

class Employee extends React.Component{

    uid = 101
    uname = "Ram" 
render(){
    return <div>
      <h2>Employee component</h2>
      <h2>Employee ID:{this.uid}</h2>
    </div>
}
}
export default Employee;