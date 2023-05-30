/* eslint-disable */
import React,{useEffect} from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import {ethers} from 'ethers';
import  contract from '../../artifacts/contracts/ProjectHandler.sol/ProjectHandler.json';
import '../../public/styles.css'
function Table(props) {
  const status=props.status;
  const type=props.type;
  const {ethereum}=window;
  
 // contractAddress="0xA81191856C3C6a4f3AE9A30f4242E58367c44bD0"
  const contractAddress=props.addres;
  const infuraProvider=new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/8be48f55cae24d3a950b0541945aba02")
  //const walletProvider=new ethers.providers.Web3Provider(ethereum);
  const getContractData=new ethers.Contract(contractAddress,contract.abi,infuraProvider);
  //const sendContractTx=new ethers.Contract(contractAddress,contract.abi,walletProvider.getSigner());
  useEffect(() => {
    async function getTransactionHistory(){
      const apiKey = 'UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7';
      const apiUrl = "https://api-sepolia.etherscan.io/api?module=account&action=txlist&address="+contractAddress+"&startblock=0&endblock=99999999&page=1&offset=30&sort=asc&apikey=UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7"
      const apiUrl2 = "https://api-sepolia.etherscan.io/api?module=account&action=txlistinternal&address="+contractAddress+"&startblock=0&endblock=99999999&page=1&offset=30&sort=asc&apikey=UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7"
    
        const response = await Axios.get(apiUrl);
        const transactions = response;
        const response2 = await Axios.get(apiUrl2);
        const transactions2 = response2;
        
        // Process the transaction data as needed
        console.log(transactions);
        console.log("internal transactions");
        console.log(transactions2);
    }
    getTransactionHistory();
  },[]);
  //  async function getTransactionHistory(){
  //   const apiKey = 'UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7';
  //   const apiUrl = "https://api-sepolia.etherscan.io/api?module=account&action=txlist&address="+contractAddress+"&startblock=0&endblock=99999999&page=1&offset=30&sort=asc&apikey=UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7"
  //   const apiUrl2 = "https://api-sepolia.etherscan.io/api?module=account&action=txlistinternal&address="+contractAddress+"&startblock=0&endblock=99999999&page=1&offset=30&sort=asc&apikey=UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7"
  
  //     const response = await Axios.get(apiUrl);
  //     const transactions = response;
  //     const response2 = await Axios.get(apiUrl2);
  //     const transactions2 = response2;
      
  //     // Process the transaction data as needed
  //     console.log(transactions);
  //     console.log("internal transactions");
  //     console.log(transactions2);
  // }
  return (
    <div className="maintable">
    <div className="tablecontainer">
      
      {/* <ul className="tablelists">
        <li className="tli">{props.transid}</li>
        <li className="tli">{props.name}</li>
        <li className="tli">{props.to}</li>
        <li className="tli">{props.amount}</li>
        <li className="tli">{props.type}</li>
        <li className="tli" style={{marginLeft:"35px"}}>{props.url}</li>
    </ul> */}
    {/* <div className="t1" style={{backgroundColor:status=== "Success" ? "green" : "red"}}>{props.status}</div> 
    <div className="t2">{props.amount} ETH</div>
    <div className="t3">{props.type}</div>
    <div className="t4">TXN HASH:{props.transid}</div>
    <div className="t5">From:{props.name}</div>
    <div className="t6">To:{props.to}</div> 
    <div>{props.addres}</div>
    {/* <button onClick={()=>getTransactionHistory()}>clickme</button> */}
    {/* <div className="t7" style={{visibility:type=== "Withdraw" ? "" : "hidden"}}>{props.url}</div> */} 
    
    
    </div>
    </div>
  );
  
}

export default Table;
