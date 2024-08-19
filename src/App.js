/* import User from "./User"
let App = ()=>{


    return <div>
        <h2>App Component</h2>
        <hr />
        <User/>
    </div>
}
export default App */

import React from "react";
import Users from "./Users";
class App extends React.Component{

render(){
return <div>
    <h1>App Component</h1>
    <hr />
    <Users/>

</div>
}
}
export default App;