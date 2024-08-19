import CompB from "./CompB"

let CompA = ()=>{
    let a=100
    let b="hello"
    return <div>
        <h2>Component A</h2>
        <hr />
        <CompB age={a} msg={b}/>
    </div>
}
export default CompA