import "./message.css"
let Message = ()=>{
    let msg = {backgroundColor:"Yellow"} //internal css
    return <div>
        <h1 style={msg}>Good Evening</h1>
        <h1 style={{backgroundColor:"red"}}>Good Evening</h1> {/* internal css */}
        <h1 className={"Ge"}>Good Evening</h1> {/* External Css */}
    </div>
}
export default Message