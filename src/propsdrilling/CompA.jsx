let CompA = ()=>{
 let emp = {
    ename:"Hello",
    esal:"1000000",
    eage:"102"
 }
    return <div>
        <h2>Component A</h2>
        <pre>{JSON.stringify(emp)}</pre>
    </div>
}
export default CompA