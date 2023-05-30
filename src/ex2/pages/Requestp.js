/* eslint-disable */
import MainLayout from '../mainlayout/MainLayout';
import {Link} from "react-router-dom"
import React, { useState,useEffect } from "react";
import Axios from 'axios';
function Home() {
  var status="";
  const [projectList,setProjectList]=useState([]);
  useEffect(() =>{
    async function fetchProjectList() {
      try{
        const requestUrl='http://127.0.0.1:8000/project';
        const response = await fetch(requestUrl);
        const responseJSON=await response.json();
        console.log(responseJSON);
        setProjectList(responseJSON);
      }
      catch{}
    }
    fetchProjectList();
  },[]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);
    const url="http://127.0.0.1:8000/request";
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
    
    async function submit(e){
      e.preventDefault();
      var response;
    const apiurl="http://127.0.0.1:8000/project/"+data.name;
     try{response = await Axios.get(apiurl);}
     catch(err){alert("project does not exist");}
    for(let i=0;i<projectList.length;i++){
     if(projectList[i].title === data.name)
     status=projectList[i].status;
    }
    const Address=await response.data.contractAddress;  
    const formData = new FormData();
    formData.append("projectTitle",data.name);
    formData.append("amount",data.amount);
    formData.append("recipientWalletAddress",data.addr);
    formData.append("supervisorMailId",data.email);
    formData.append("photo", file);
    formData.append("contractAddress",Address);
    alert("please wait processing...")
    if(status==="ongoing"){
    const resp = Axios.post(url, formData, {
      headers: {
        "content-type": "multipart/form-data",
       
      },
    }).then(res=>{alert("success");window.location.reload();})
    .catch(err=>alert("error"));
    }
    else
    alert("project closed cannot create a request");
     }
  return (
    
    <MainLayout>
      <div className="requestProject">
      <form onSubmit={(e)=>submit(e)}>
     
      <h1 style={{marginTop:"10%"}}>Request Fund</h1><br></br>
      <div className="insiderequest">
        <input id="name" type="text" onChange={(e)=>handle(e)} className='createinp' placeholder='Project Title' required></input><br></br>
        <input id="amount" type="text" onChange={(e)=>handle(e)} className='createinp' placeholder='Amount' required></input><br></br>
       <input id="addr" type="text" onChange={(e)=>handle(e)} className='createinp' placeholder='Receipient Wallet Address' required></input><br></br>
        <input id="email" type="email" onChange={(e)=>handle(e)} className='createinp' placeholder='Email ID' required></input><br></br>
        {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
            
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
          
        </div>
      )}

      
      <br />
      
      <input
        type="file"
        name="myImage"
        id="img"
        
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          setFile(event.target.files[0]);
        }}
      /> 
      </div>
      <br />
      
        <button style={{
          width: '85px',
          padding: '10px',
          fontSize: '10px',
          background: '#04AA6D',
          fontWeight: 'bold',
          borderRadius: '10px',
          }} >
        Create</button>
      
        </form>
      </div>
    </MainLayout>
    
  )
  
}

export default Home;