
import MainLayout from '../mainlayout/MainLayout';
import {Link} from "react-router-dom"
import React, { useState,useEffect } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import {ethers} from 'ethers';
import  contract from '../../../artifacts/contracts/ProjectHandler.sol/ProjectHandler.json';
//import Success from "../pages/Success"
function CHome() {
 
  const {ethereum}=window;
  const contractAddress="0xA81191856C3C6a4f3AE9A30f4242E58367c44bD0"
  const infuraProvider=new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/8be48f55cae24d3a950b0541945aba02")
  const walletProvider=new ethers.providers.Web3Provider(ethereum);
  const getContractData=new ethers.Contract(contractAddress,contract.abi,infuraProvider);
  const sendContractTx=new ethers.Contract(contractAddress,contract.abi,walletProvider.getSigner());
 
  const getGreeting=async()=>{
    const data=await getContractData.getBalance();
    console.log(data);
  }//use to get contract data 
  
  const setGreeting=async(val)=>{
    try{
    const sendData=await sendContractTx.Deposit({
      value:ethers.utils.parseEther(val)
    })
    const transactionReceipt = await sendData.wait();
    alert("success")
    const data=await getContractData.getBalance();
    console.log(data);
  }
  catch(err){
    alert(err.message);
  }
    
    
  }
  return (
    
    <MainLayout>
      
      <div className="createProject">
     
      <div className="insidecreate">
      <h1>Fund a Project</h1><br></br>
        <span>Project Contract Address: </span><input type="text" className='createinp' id="name"></input><br></br><br></br>
        <span>Amount: </span><input type="text" className='createinp' id="addr" ></input><br></br>
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
          }} onClick={()=>setGreeting(document.getElementById('addr').value)}>
        Create</button>
        {/* </Link> */}
        <button onClick={()=>getGreeting()}>getBalance</button>
      </div>
    
    </MainLayout>
    
  )
}

export default CHome;