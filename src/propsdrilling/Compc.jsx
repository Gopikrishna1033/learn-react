/* import React from "react";
import Compd from "./Compd";
class Compc extends React.Component{

    render(){
        return <div>
            <h2>Component C</h2>
            <hr />
            <Compd/>
        </div>
    }
}
export default Compc */

import Compd from "./Compd"


let Compc =(props)=>{
    
    return <div>
        <h2>Component c</h2>
        <pre>{JSON.stringify
            (props)}</pre>
        <hr />

        <Compd/>
    </div>
}
export default Compc