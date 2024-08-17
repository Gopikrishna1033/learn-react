let Employee = ()=>{
    let employees = [
    {id:101,name:"Ram",email:"xyz@gmail.com"},
    {id:102,name:"Raj",email:"abc@gmail.com"},
    {id:103,name:"Rahul",email:"mi@gmail.com"},
    {id:104,name:"Raja",email:"kkr@gmail.com"},
    {id:105,name:"Ranjith",email:"csk@gmail.com"},
    {id:106,name:"Rajini",email:"rcb@gmail.com"},
    {id:107,name:"Rajitha",email:"cmr@gmail.com"},
    {id:108,name:"Rajya",email:"klm@gmail.com"},
    {id:109,name:"Rajesh",email:"kml@gmail.com"},
    {id:110,name:"sita",email:"iop@gmail.com"},
    {id:111,name:"srinidhi",email:"gyj@gmail.com"},
    {id:112,name:"sailu",email:"cfr@gmail.com"},
    ]

return <div>
    <table border={2}>
        <thead>
            <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map((emp,i)=>{
                    return <tr key = {emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
</div>
}
export default Employee