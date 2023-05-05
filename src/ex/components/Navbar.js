import React ,{useState} from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {ethers} from 'ethers';
import { TfiUser } from "react-icons/tfi";

function Navbar() {
    const {ethereum}=window;
    const [address,setAddress]=useState('Connect Wallet')
    const [bgcolor, setBgcolor] = React.useState('black');
//const [textcolor, setTextcolor] = useState('white'); 
    function handleSelect() {
        setBgcolor('white');
    }
    const requestAccount=async()=>{
       await ethereum.request({method:"wallet_requestPermissions",
    params:[{
        eth_accounts:{}
    }]
    });
    const accounts= ethereum.request({method:"eth_requestAccounts"})
    console.log(accounts);
    setAddress(accounts[0]);
    }
    
  return (
    <div >
    <div className='Navbar'>
        <Link to="/Home"><h1 className='logo'>TrustMyFund</h1></Link>
        
        <ul className="navbar-menu">
            <li ><NavLink to="/CHome" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' ,textDecoration: isActive? "underline":"none"})}>Create</NavLink></li>
            <li><NavLink to="/CProject" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' ,textDecoration: isActive? "underline":"none"})}>Close</NavLink></li>
            {/* <li><NavLink to='/Contact' style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' ,textDecoration: isActive? "underline":"none"})}>Contact us</NavLink></li> */}
            <li><NavLink to='/Login' className="login">< TfiUser /> Logout</NavLink></li>
            <li><button onClick={requestAccount}>Connect</button></li>
        {/* <ul className="navbar-login">
            <li className='login'><a href='/Login'><BsPersonCircle/>Login</a></li>
        </ul> */}
        </ul>
        </div>
    </div>
  )
}

export default Navbar