import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import {ethers} from 'ethers';
import  contract from '../../../artifacts/contracts/ProjectHandler.sol/ProjectHandler.json';

function FlipCard(props) {
	const {ethereum}=window;
  const contractAddress="0x701c444e99EDDE3E56cEc6c006d4935cA781E567"
  const infuraProvider=new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/8be48f55cae24d3a950b0541945aba02")
  const walletProvider=new ethers.providers.Web3Provider(ethereum);
  const getContractData=new ethers.Contract(contractAddress,contract.abi,infuraProvider);
  const sendContractTx=new ethers.Contract(contractAddress,contract.abi,walletProvider.getSigner());
 
  // const getGreeting=async()=>{
  //   const data=await getContractData.getBalance();
  //   console.log(data);
  // }//use to get contract data 
  var receipent="0x983aCc74cd696Cd1D8b5D82D6912fF8571aE96F7"
  const setGreeting=async()=>{
    //console.log(val);
    //var a=ethers.utils.parseEther('0.01');
    //var b="10000000000000000"
    try{
    const sendData=await sendContractTx.projectCompleted(); 
    const transactionReceipt = await sendData.wait();
    alert("success")
  }
  catch(err){
    alert(err.message);
  }
    
    
  }
	
	const [flip, setFlip] = useState(false);
	return (
        <div className="flipCard">
		<ReactCardFlip isFlipped={flip}
			flipDirection="horizontal" >
            
			<div style={{
                
				width: '250px',
				height: '200px',
				background: 'rgba(29,28,35,255)',
				color: 'green',
				margin: '10px',
				borderRadius: '10%',
				
			}} onClick={() => setFlip(!flip)}>
            {/* <img src={props.img} alt="none" className="item5"/>  */}
            <div className="flip-container">
                <div className="item1">{props.name}</div>
                <div className="item2">{props.balance}<div className="Balance">Balance</div></div>
                <div className="item3">{props.fund}<div className="Balance">Total Fund</div></div>
                <div className="item4">{props.address}<div className="Balance">Address</div></div>
            </div>
				
				
			</div>
			<div style={{
    
                width: '250px',
				height: '200px',
				background: 'rgba(29,28,35,255)',
				color: 'white',
				margin: '10px',
                
				borderRadius: '10%',
                
			}} onClick={() => setFlip(!flip)}>
                <div className="card-content">
                <div className="card-content head">{props.name}</div>
                <br/>
                {props.content}
                </div>
                {/* <Link to='/Success' > */}
				
                    <button className="flipbutton" onclick="confirm('hello')" style={{
                    
					width: '85px',
					padding: '10px',
					fontSize: '10px',
					background: '#04AA6D',
					fontWeight: 'bold',
					borderRadius: '10px',
                    
				}} onClick={()=>setGreeting()}>
					Close</button>
                    {/* </Link> */}
				</div>
                
			
		</ReactCardFlip>
        </div>
	);
}

export default FlipCard;
