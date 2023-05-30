/* eslint-disable */
import React from 'react'
import { Link } from "react-router-dom";
import MainLayout from '../mainlayout/MainLayout';
import TextField from "@mui/material/TextField";
import { confirm } from "react-confirm-box";
import './login.css';
function Fund() {
    const [fullName, setFullName] = React.useState({
        Name: "",
        Email: "",
        Amount:"",
        Addess:""
      });
      function handleClick(){
        var a=confirm("Are details ok");
      }
  return (
    
    <MainLayout>
    <div>
    <form action="action_page.php" method="post">
  <div class="fund-container">
  <div class="imgcontainers">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYNTyuDnEuynp05AM__d94bnRUkgVMBi2TA&usqp=CAU" alt="Avatar" class="avatars"/>
  </div>
    <input className="inp" type="text" placeholder="Enter Name" name="uname" required/>
    <input className="inp" type="email" placeholder="Enter Email" name="psw" required/>
    <input className="inp" type="text" placeholder="Enter Amount" name="psw" required/>
    <input className="inp" type="text" placeholder="Enter Address" name="psw" required/>

    <button className="but" type="submit" onMouseDown={handleClick}>Submit</button>
  </div>
</form>

</div>
</MainLayout>
    
  )
}

export default Fund;