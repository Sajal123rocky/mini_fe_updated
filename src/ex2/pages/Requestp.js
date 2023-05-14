
import MainLayout from '../mainlayout/MainLayout';
import {Link} from "react-router-dom"
import React, { useState } from "react";
import Axios from 'axios';
function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  //const navigate = useNavigate();
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
    const apiurl="http://127.0.0.1:8000/project/contract/"+data.name;
    const response = await Axios.get(apiurl);
    const Address=await response.data.contractAddress;  
    const formData = new FormData();
    formData.append("projectTitle",data.name);
    formData.append("amount",data.amount);
    formData.append("recipientWalletAddress",data.addr);
    formData.append("supervisorMailId",data.email);
    formData.append("photo", file);
    formData.append("contractAddress",Address);
    alert("please wait processing...")
    const resp = Axios.post(url, formData, {
      headers: {
        "content-type": "multipart/form-data",
       
      },
    }).then(res=>{alert("success");window.location.reload();})
    .catch(err=>alert("error"));
    
    //alert(resp.status === 200 ? "Thank you!" : "Error.");
    //   Axios.post(url,{
    //     projectTitle:data.name,
    //     amount:data.amount,
    //     recipientWalletAddress:data.addr,
    //     supervisorMailId:data.email,
    //     photo:file
    //   })
    //   .then(res=>{
    //     //navigate(".././pages/Success");
        
    //     alert("Success");
    //   })
    //   .catch(err => alert("project not created")); 
     }
  return (
    
    <MainLayout>
      <div className="createProject">
      <form onSubmit={(e)=>submit(e)}>
      <div className="insidecreate">
      <h1>Request Fund</h1><br></br>
        <span>Project Title: </span><input id="name" type="text" onChange={(e)=>handle(e)} className='createinp'></input><br></br><br></br>
        <span>Amount:</span><input id="amount" type="text" onChange={(e)=>handle(e)} className='createinp'></input><br></br><br></br>
        <span>Wallet Address:</span><input id="addr" type="text" onChange={(e)=>handle(e)} className='createinp'></input><br></br><br></br>
        <span>Email Id:</span><input id="email" type="text" onChange={(e)=>handle(e)} className='createinp'></input><br></br><br></br>
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
          marginLeft: '40px',
          }} >
        Create</button>
      
        </form>
      </div>
    </MainLayout>
    
  )
  
}

export default Home;