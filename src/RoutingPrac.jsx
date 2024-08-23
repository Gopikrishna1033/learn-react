import React from 'react'
import {Link ,BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./sidepages/Home"
import About from "./sidepages/About"
import Services from "./sidepages/Services"
import Login from './sidepages/Login'
import Signup from './sidepages/Signup'
function RoutingPrac() {
  return (
    <div>
        <Router>
            <nav className='navbar-nav bg-dark navbar-expand-lg'>
                <Link to={"/index"} className='navbar-brand'>Logo</Link>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-link'><Link to={"/index"}>Home</Link></li>
                    <li className='nav-link'><Link to={"/about"}>About</Link></li>
                    <li className='nav-link'><Link to={"/services"}>Services</Link></li>
                    <li className='nav-link'><Link to={"/signup"}>Signup</Link></li>
                    <li className='nav-link'><Link to={"/login"}>Login</Link></li>
                </ul>
            </nav> 
            <Routes>
                <Route path='index' element={<Home/>}></Route>  
                <Route path='about' element={<About/>}></Route>  
                <Route path='services' element={<Services/>}></Route>  
                <Route path='signup' element={<Signup/>}></Route>  
                <Route path='login' element={<Login/>}></Route>  
            </Routes>
            
        </Router>
    </div>
  )
}

export default RoutingPrac