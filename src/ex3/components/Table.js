import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import {ethers} from 'ethers';
import  contract from '../../../artifacts/contracts/ProjectHandler.sol/ProjectHandler.json';
function Table(props) {
  const status=props.status;
  const type=props.type;
  const {ethereum}=window;
  // const contractAddress="0x89f62d4255736aaa506ae55dd175ca9e20a93fbe"
  let infuraProvider;
  let walletProvider;
  let getContractData;
  let sendContractTx;
  function set(contractAddress)
  {
   infuraProvider=new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/8be48f55cae24d3a950b0541945aba02")
   walletProvider=new ethers.providers.Web3Provider(ethereum);
   getContractData=new ethers.Contract(contractAddress,contract.abi,infuraProvider);
   sendContractTx=new ethers.Contract(contractAddress,contract.abi,walletProvider.getSigner());
  }
  // async function getTransactionHistory() {
  //   try{
  //   const eventName = 'FundWithdrawal'; // name of the event you want to filter by
  //   const filter = getContractData.filters[eventName](); // create the filter object
  //   const txList = await getContractData.queryFilter(filter); // get the list of events

  //   const txDetails = await Promise.all(
  //     txList.map((tx) => infuraProvider.getTransaction(tx.transactionHash))
  //   );
  //   const int=await infuraProvider.getTransaction(txDetails[txDetails.length-1].hash);
  //   //console.log(int);
  //   console.log(txDetails);
  //   // console.log(txDetails[txDetails.length-1].hash);
  //   // console.log(txDetails[txDetails.length - 1].from);
  //   // console.log(txDetails[txDetails.length - 1].to);
  //   return txDetails;
  //   }
  //   catch (error) {
  //     console.error(error);
  //   }
  // }
  // const getGreeting=async()=>{
  //   const data=await getContractData.getBalance();
  //   console.log(data);
  // }//use to get contract data 
  var receipent="0x983aCc74cd696Cd1D8b5D82D6912fF8571aE96F7"
  const setGreeting=async(val,val1)=>{
    //console.log(val);
    var a=ethers.utils.parseEther(val);
    set(val1);
    try{
    const sendData=await sendContractTx.withdraw(receipent,a);
    alert("processing please wait");
    const transactionReceipt = await sendData.wait();
    // const data=await getContractData.getBalance();
    // console.log(data);
  alert("success")
  }
  catch(err){
    alert(err.message);
  }
    
    
  }
  return (
    <div className="maintable">
    <div className="tablecontainer">
    <div className="t1" >{props.name}</div> 
    <div className="t2">{props.amount} ETH</div>
    <div className="t33"><a href={props.url}>link</a></div> 
    <div className="t4">Address:{props.address}</div>
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
        
}} onClick={()=>setGreeting(props.amount,props.address)}>
Accept</button>
        {/* </Link> */}
        </div>  
    {/* <div className="t7" >{props.url}</div> */}
    
    
    </div>
    </div>
  );
  
}

export default Table;
