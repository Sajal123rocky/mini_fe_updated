import React ,{useEffect,useState} from 'react'
import MainLayout from '../mainlayout/MainLayout';
import {Link} from "react-router-dom"
//import React, { useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
//import Success from "../pages/Success"
function CHome() {
  //const navigate = useNavigate();
  const url="http://127.0.0.1:8000/request/";
  const [data,setData]=useState({
    name:"",
    amount:"",
    addr:"",
    email:"",
    img:""
  })
    function handle(e){
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      setData(newdata);
      console.log(newdata);
    }

  const [projectList,setProjectList]=useState([]);
  // useEffect(() =>{
  //   async function fetchProjectList() {
  //     try{
  //       const requestUrl=url+data.name;
  //       const response = await fetch(requestUrl);
  //       const responseJSON=await response.json();
  //       console.log(responseJSON);
  //       setProjectList(responseJSON);
  //       console.log(projectList);
  //       alert(projectList);
  //     }
  //     catch{}
  //   }
  //   fetchProjectList();
  // },[]);
  async function fetchData() {
    try{
          const requestUrl=url+data.name;
          const response =  await fetch(requestUrl)
          console.log(response);
          const responseJSON=await response.json()
          console.log(responseJSON);
          //setProjectList(responseJSON);
          //console.log(projectList.transactionStatus);
          setTimeout(function(){alert(responseJSON.transactionStatus)},1000);
        }
          catch{}
  }
// useEffect(() => {
//     fetchData()
//    }, [])
  const handleSubmit = e => {
   e.preventDefault()
    fetchData()
  }
  
  //const [selectedImage, setSelectedImage] = useState(null);
  return (
    
    <MainLayout>
      
      <div className="createProject">
      <form onSubmit={handleSubmit}>
      <div className="insidecreate">
      <h1>Request status</h1><br></br>
        <span>Project Title: </span><input   type="text" className='createinp' id="name" onChange={(e)=>handle(e)}></input><br></br><br></br>
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