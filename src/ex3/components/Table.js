import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import {ethers} from 'ethers';
import  contract from '../../../artifacts/contracts/ProjectHandler.sol/ProjectHandler.json';
function Table(props) {
  const status=props.status;
  const type=props.type;
  const {ethereum}=window;
  const contractAddress="0xA81191856C3C6a4f3AE9A30f4242E58367c44bD0"
  const infuraProvider=new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/8be48f55cae24d3a950b0541945aba02")
  const walletProvider=new ethers.providers.Web3Provider(ethereum);
  const getContractData=new ethers.Contract(contractAddress,contract.abi,infuraProvider);
  const sendContractTx=new ethers.Contract(contractAddress,contract.abi,walletProvider.getSigner());
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
  // const getGreeting=async()=>{
  //   const data=await getContractData.getBalance();
  //   console.log(data);
  // }//use to get contract data 
  var receipent="0x983aCc74cd696Cd1D8b5D82D6912fF8571aE96F7"
  const setGreeting=async(val)=>{
    //console.log(val);
    //var a=ethers.utils.parseEther('0.01');
    //var b="10000000000000000"
    try{
    const sendData=await sendContractTx.withdraw(receipent,val)
    const transactionReceipt = await sendData.wait();
    alert("success")
    const getContractData=await getContractData.getBalance();
    console.log(getContractData);
  }
  catch(err){
    alert(err.message);
  }
    
    
  }
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
    <div className="t1" >{props.name}</div> 
    <div className="t2">{props.amount} ETH</div>
    <div className="t33"><a href={props.url}>link</a></div> 
    <div className="t4">TXN HASH:{props.transid}</div>
    <div className="t5"> <Link to='/Success' >
				
        <button className="flipbuttonjhj" onclick="confirm('hello')" style={{
        
width: '85px',
padding: '10px',
fontSize: '10px',
background: 'red',
fontWeight: 'bold',
borderRadius: '10px',
        
}} >
Reject</button>
        </Link></div>
    <div className="t6">
    {/* <Link to='/Success' > */}
				
        <button className="flipbuttonjhj" onclick="confirm('hello')" style={{
        
width: '85px',
padding: '10px',
fontSize: '10px',
background: '#04AA6D',
fontWeight: 'bold',
borderRadius: '10px',
marginLeft:'200px',
        
}} onClick={()=>setGreeting(props.amount)}>
Accept</button>
        {/* </Link> */}
        </div>  
    {/* <div className="t7" >{props.url}</div> */}
    
    
    </div>
    </div>
  );
  
}

export default Table;
