/* Event Binding */
import { useState } from "react"

let Product = ()=>{
    let [pName,setpname] = useState('Test')
    let updateHandler = (prodName)=>{
        setpname(prodName)
    }

    return <div>
        <h2>
            Product Name:{pName}
        </h2>
        <img src="https://tse2.mm.bing.net/th?id=OIP.wKEvIhL5zIE1b5W4kf3PNgHaHa&pid=Api&P=0&h=180"  onClick={updateHandler.bind(null,"Hello")} alt="image" />
        <img src="https://tse1.mm.bing.net/th?id=OIP.--Of_liXCV6pfnkJvt_opgHaH3&pid=Api&P=0&h=180"  onClick={updateHandler.bind(null,"Hii")} alt="image" />
    </div>
}
export default Product