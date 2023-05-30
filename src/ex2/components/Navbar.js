import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";

import { TfiUser } from "react-icons/tfi";

function Navbar() {
    const history = useNavigate();
    function handleClick() {
        // history.push('/Login');
        // history.go(0); // clears the browser stack
        history('/Login', { replace: true })
      }
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
            {/* <li ><NavLink to="/Home" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' ,textDecoration: isActive? "underline":"none"})}>Create</NavLink></li> */}
            <li><NavLink to="/Requestp" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' ,textDecoration: isActive? "underline":"none"})}>Request fund</NavLink></li> 
             <li><NavLink to='/RequestMail' style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' ,textDecoration: isActive? "underline":"none"})}>Status</NavLink></li> 
              <li><a href='/Login' className="login" onClick={()=>handleClick()}>< TfiUser /> Logout</a></li>
        {/* <ul className="navbar-login">
            <li className='login'><a href='/Login'><BsPersonCircle/>Login</a></li>
        </ul> */}
        </ul>
        </div>
    </div>
  )
}

export default Navbar