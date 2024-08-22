import React from 'react'
import Home from "./pages/Home"
import About from './pages/About'
import Services from './pages/Services'
import Axio from './lifecyclemthods/Axio'
import Login from './pages/Login'
import Registration from './pages/Registration'
import {Link,BrowserRouter as Router, Routes,Route} from 'react-router-dom'
function Routing() {
  return (
    <div>
        {/* <h2>Routing Class</h2> */}
        <Router>
            <nav className='navbar-nav navbar-dark bg-dark navbar-expand-lg'>
                <Link to={'/index'} className='navbar-brand'>Logo</Link>
                <div className='ml-auto'>
                    <ul className='navbar-nav'>
                        <li className='nav-link'><Link to={'/index'}>Home</Link></li>
                        <li className='nav-link'><Link to={'/about'}>About</Link></li>
                        <li className='nav-link'><Link to={'/services'}>Services</Link></li>
                        <li className='nav-link'><Link to={'/user'}>Users</Link></li>
                        <li className='nav-link'><Link to={'/register'}>Signup</Link></li>
                        <li className='nav-link'><Link to={'/login'}>Login</Link></li>
                    </ul>
                </div>
            </nav>
            <Routes>
               <Route path='index' element={<Home/>}/>
               <Route path='about' element={<About/>}></Route>
               <Route path='services' element={<Services/>}></Route>
               <Route path='user' element={<Axio/>}/>
               <Route path='login' element={<Login/>}/>
               <Route path='register' element={<Registration/>}/>
            </Routes>
        </Router>
        
    </div>
  )
}

export default Routing