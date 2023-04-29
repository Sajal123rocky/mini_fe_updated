
import MainLayout from '../mainlayout/MainLayout';
import {Link} from "react-router-dom"
import React, { useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
//import Success from "../pages/Success"
function CHome() {
  const navigate = useNavigate();

    const url="http://127.0.0.1:8000/project";
    const [data,setData]=useState({
      name:"",
      des:"",
      addr:""
    })
    function handle(e){
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      setData(newdata);
      console.log(newdata);
    }
    function submit(e){
      e.preventDefault();
      Axios.post(url,{
        title:data.name,
        description:data.des,
        walletaddress:data.addr

      })
      .then(res=>{
        //navigate(".././pages/Success");
        
        alert("Success");
      })
      .catch(err => alert("project not created")); 
    }
  //const [selectedImage, setSelectedImage] = useState(null);
  return (
    
    <MainLayout>
      
      <div className="createProject">
      <form onSubmit={(e)=>submit(e)}>
      <div className="insidecreate">
      <h1>Create a Project</h1><br></br>
        <span>Project Title: </span><input onChange={(e)=>handle(e)} value={data.name} type="text" className='createinp' id="name"></input><br></br><br></br>
        <p>Description:</p>
        <textarea rows="4" cols="30" maxLength='100' className='createinp' id="des" onChange={(e)=>handle(e)} value={data.des}></textarea><br></br><br></br>
        <span>Wallet address: </span><input type="text" className='createinp' id="addr" onChange={(e)=>handle(e)} value={data.addr}></input><br></br>
      </div>
      <br />
      {/* <Link to='/Success' > */}
        <button style={{
          width: '85px',
          padding: '10px',
          fontSize: '10px',
          background: '#04AA6D',
          fontWeight: 'bold',
          borderRadius: '10px',
          marginLeft: '40px',
          }} >
        Create</button>
        {/* </Link> */}
        </form>
      </div>
    
    </MainLayout>
    
  )
}

export default CHome;