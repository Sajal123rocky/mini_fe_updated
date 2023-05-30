/* eslint-disable */
import './login.css';
import MainLayout from "../mainlayout/MainLayout"
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Login(){
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  function handleChange(e) {
    console.log(e.target.value)
    if(e.target.value==="admin")
    setName('/CHome');
    else if(e.target.value==="admin1")
    setName('/Requestp');
    else if(e.target.value==="admin2")
    setName('/Requestv');
    else
    setName('/Success');
  }
  function handleClick(event) {
    setHeading(name);
  }

    return(
      <MainLayout>
    <div>
    <form action={headingText} target="_blank" >
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div class="container">  
    <input  id="user" onChange={handleChange} className="inp" type="text" placeholder="Enter Username" required/>
    <br></br>
    <input className="inp" onChange={handleChange} id="pass" type="password" placeholder="Enter Password" name="psw" required/>
    <br></br>
    <a href={headingText} target="_blank" rel="noopener noreferrer">
    <button className="but" onClick={handleClick}>Login</button>
    </a>
  </div>
</form>

</div>
</MainLayout>);
}

export default Login;
