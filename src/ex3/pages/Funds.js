
import MainLayout from '../mainlayout/MainLayout';
import {Link} from "react-router-dom"
import React, { useState,useEffect } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import {ethers} from 'ethers';
import  contract from '../../../artifacts/contracts/ProjectHandler.sol/ProjectHandler.json';
//import Success from "../pages/Success"
function CHome() {
  var txData;
  const {ethereum}=window;
  const contractAddress="0xA81191856C3C6a4f3AE9A30f4242E58367c44bD0"
  const infuraProvider=new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/8be48f55cae24d3a950b0541945aba02")
  const walletProvider=new ethers.providers.Web3Provider(ethereum);
  const getContractData=new ethers.Contract(contractAddress,contract.abi,infuraProvider);
  const sendContractTx=new ethers.Contract(contractAddress,contract.abi,walletProvider.getSigner());
  // const getTransactionHistory = async () => {
  //   const block = await infuraProvider.getBlockNumber();
  //   const txs = await infuraProvider.getBlockWithTransactions(block);
  //   console.log(txs);
  //   // Map the transaction data to a format suitable for display in the React frontend
  //   // txData = txs.map(tx => ({
  //   //   txHash: tx.transactionHash,
  //   //   blockNumber: tx.blockNumber,
  //   //   timestamp: new Date(tx.timestamp * 1000).toLocaleString(),
  //   //   from: ethers.utils.getAddress(tx.topics[1]),
  //   //   to: ethers.utils.getAddress(tx.topics[2]),
  //   //   event: tx.topics[0],
  //   //   data: tx.data
  //   // }));
  //   // console.log(txData)
  //   // console.log(tx.txHash);
  // }
  async function getTransactionHistory() {
    const apiKey = 'UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7';
    const apiUrl = "https://api-sepolia.etherscan.io/api?module=account&action=txlist&address="+contractAddress+"&startblock=0&endblock=99999999&page=1&offset=20&sort=asc&apikey=UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7"
    console.log(apiUrl);
    try {
      const response = await Axios.get(apiUrl);
      const transactions = response.data.result;
      return transactions;
      

      // Process the transaction data as needed
      // for(let i = 0; i < transactions.length; i++) 
      // {
      //   console.log("transaction no. "+(i+1));
      //   console.log(transactions[i].hash);
      //   console.log(transactions[i].from);
      //   console.log(transactions[i].to);
      //   console.log(ethers.utils.formatEther(transactions[i].value));
      // }
      
    } catch (error) {
      console.error(error);
    }
  }
  
  const getGreeting=async()=>{
    const data=await getContractData.getBalance();
    console.log(data);
    const balance=ethers.utils.formatEther(data);
    console.log(balance);
  }//use to get contract data 
  
  const setGreeting=async(val)=>{
    try{
    const sendData=await sendContractTx.Deposit({
      value:ethers.utils.parseEther(val)
    })
    const transactionReceipt = await sendData.wait();
   
    const data=await getContractData.getBalance();
    console.log(data);
    const trans=await getTransactionHistory()
    setTimeout(function(){console.log(trans[trans.length-1].hash);
      console.log(trans[trans.length-1].from);
      console.log(trans[trans.length-1].to);
  },5000);
    
    // const apiKey = 'UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7';
    // const apiUrl = "https://api-sepolia.ethers-can.io/api?module=account&action=txlist&address="+contractAddress+"&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7"
  
    //   const response = await Axios.get(apiUrl);
    //   const transactions = response.data.result;
      
    //   // Process the transaction data as needed
    //   console.log(transactions);
      alert("success")
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
        <button onClick={()=>getTransactionHistory()}>getTransactionHistory</button>
      </div>
    
    </MainLayout>
    
  )
}

export default CHome;