import './login.css';
import MainLayout from "../mainlayout/MainLayout"
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Login(){
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
    if(event.target.value==="admin")
    setName('/CHome');
    else if(event.target.value==="admin1")
    setName('/Requestp');
    else if(event.target.value==="admin2")
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
    <form action="action_page.php" method="post">
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div class="container">  
    <input onChange={handleChange} className="inp" type="text" placeholder="Enter Username" required/>
    <br></br>
    <input className="inp" type="password" placeholder="Enter Password" name="psw" required/>
    <br></br>
    <Link to={headingText} >
    <button className="but" onClick={handleClick}>Login</button>
    </Link>
  </div>
</form>

</div>
</MainLayout>);
}

export default Login;
