import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { TfiUser } from "react-icons/tfi";

function Navbar() {
    const [bgcolor, setBgcolor] = React.useState('black');
//const [textcolor, setTextcolor] = useState('white'); 
    function handleSelect() {
        setBgcolor('white');
    }
    
  return (
    <div >
    
    <div className='Navbar'>
        <Link to="/Home" target="_blank" rel="noopener noreferrer"><h1 className='logo'>TrustMyFund</h1></Link>
        
        <ul className="navbar-menu">
            <li ><NavLink to="/Home" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' ,textDecoration: isActive? "underline":"none"})}>Home</NavLink></li>
            <li><NavLink to="/Project" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' ,textDecoration: isActive? "underline":"none"})}>Project</NavLink></li>
            <li><NavLink to='/Contact' style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' ,textDecoration: isActive? "underline":"none"})}>Contact us</NavLink></li>
            <li><NavLink to='/Login' className="login">< TfiUser /> Login</NavLink></li>
        {/* <ul className="navbar-login">
            <li className='login'><a href='/Login'><BsPersonCircle/>Login</a></li>
        </ul> */}
        </ul>
        
        </div>
    </div>
  )
}

export default Navbar