/* eslint-disable */
import MainLayout from '../mainlayout/MainLayout';
import {Link} from "react-router-dom"
import React, { useState } from "react";
import Axios from 'axios';
import { ethers } from 'ethers';
import  MyContract from '../../../artifacts/contracts/ProjectHandler.sol/ProjectHandler.json';
//import MyContract  from '../../../contracts/ProjectHandler.sol';
// import deploy from "../../../scripts/deploy"
import { useNavigate } from "react-router-dom";
//import Success from "../pages/Success"
const privateKey="9ed047e4c36aaf4462cf9558815595feea310eaa67b036199f809ab78ecc5999"
function CHome() {
  const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/8be48f55cae24d3a950b0541945aba02');
  const wallet = new ethers.Wallet(privateKey, provider);
  const contractFactory = new ethers.ContractFactory(MyContract.abi, MyContract.bytecode, wallet);
  const deployContract = async (e) => {
    e.preventDefault();
    alert("Processing Please Wait...")
   
    try{
    const contract = await contractFactory.deploy(document.getElementById('addr').value);
  
    await contract.deployed();
    Axios.post(url,{
      title:data.name,
      description:data.des,
      walletaddress:data.addr,
      contractAddress:contract.address
    }).then(alert("project created successfully"));
    console.log(contract.address);
    window.location.reload();
  }
   
    catch(err){
      alert(err.message);
    }
    
  }
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
    // function submit(e){
    //   e.preventDefault();
    //   Axios.post(url,{
    //     title:data.name,
    //     description:data.des,
    //     walletaddress:data.addr

    //   })
    //   .then(res=>{
    //     //navigate(".././pages/Success");
        
    //     alert("Success");
    //   })
    //   .catch(err => alert("project not created")); 
    // }
  //const [selectedImage, setSelectedImage] = useState(null);
  return (
    
    <MainLayout>
      
      <div className="createProject">
      <form onSubmit={(e)=>deployContract(e)}>
      {/* <div className="insidecreate"> */}
      <h1 style={{marginTop:"10%"}}>Create a Project</h1><br></br>
      <div className="insidecreate">
        <input onChange={(e)=>handle(e)} value={data.name} type="text" className='createinp' id="name" placeholder='Project Title' required></input><br></br>
        <textarea rows="4" cols="30" maxLength='100' className='createinp' id="des" onChange={(e)=>handle(e)} value={data.des} placeholder='Description'></textarea><br></br>
        <input type="text" className='createinp' id="addr" onChange={(e)=>handle(e)} value={data.addr} placeholder='Finance Validator Wallet Address' required></input><br></br>
     
      <br />
      {/* <Link to='/Success' > */}
        <button style={{
          width: '85px',
          padding: '10px',
          fontSize: '10px',
          background: '#04AA6D',
          fontWeight: 'bold',
          borderRadius: '10px',
          
          }} >
        Create</button>
        </div>
        {/* </Link> */}
        </form>
      </div>
    
    </MainLayout>
    
  )
}

export default CHome;