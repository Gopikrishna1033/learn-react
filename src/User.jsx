/* import Employee from "./Employee";
let User = ()=>{

    let uid = 101;
    let uname = "Ram";

    return <div>
        <h2>
            User Component
        </h2>
        <hr />
        <Employee uid ={uid} uname ={uname}/>

    </div>
}
export default User; */

import React from "react";
import Employee from "./Employee";

class User extends React.Component{
    uid = 101
    uname = "Ram"
    render(){
        return <div>
                <h2>User Component</h2>
                <hr />
                <Employee />
        </div>
    }
}
export default User;