import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import Transactions from "../pages/Transactions";
import project from "../ProjectContract";
import {ethers} from 'ethers';
import  contract from '../../artifacts/contracts/ProjectHandler.sol/ProjectHandler.json';

function FlipCard(props) {
	const {ethereum}=window;
  
  //const [contractAddress,setcontractAddress]=useState("");
  //const contractAddress="0x701c444e99EDDE3E56cEc6c006d4935cA781E567"
   //let contractAddress=props.address;
   let infuraProvider;
   let walletProvider;
   let getContractData;
   let sendContractTx;
   let bal="";
  const getGreeting=async(val,val1)=>{
    set(val);
    const data=await getContractData.getBalance();
    bal=ethers.utils.formatEther(data);
    console.log(bal);
    alert("Project "+val1+" balance is "+bal+" ETH");
  }
  function set(contractAddress){
	infuraProvider=new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/8be48f55cae24d3a950b0541945aba02")
	walletProvider=new ethers.providers.Web3Provider(ethereum);
	getContractData=new ethers.Contract(contractAddress,contract.abi,infuraProvider);
	sendContractTx=new ethers.Contract(contractAddress,contract.abi,walletProvider.getSigner());
   }
	const [flip, setFlip] = useState(false);
	return (
        <div className="flipCard">
		<ReactCardFlip isFlipped={flip}
			flipDirection="horizontal" >
            
			<div style={{
                
				width: '500px',
				height: '250px',
				background: 'rgba(29,28,35,255)',
				color: 'green',
				margin: '10px',
				borderRadius: '10px',
				
			}} onClick={() => setFlip(!flip)}>
            {/* <img src={props.img} alt="none" className="item5"/>  */}
            <div className="flip-container">
                <div className="item1">{props.name}</div>
                <div className="item2"><button style={{
                    
                    width: '120px',
                    padding: '10px',
                    fontSize: '10px',
                    background: '#04AA6D',
                    fontWeight: 'bold',
                    borderRadius: '20px',
                              
                  }}onClick={(e)=>{e.stopPropagation();getGreeting(props.address,props.name)}}>show balance</button></div>
                <div className="item3">{props.status}</div>
                <div className="item4">{props.address}<div className="Balance">Address</div></div>
				<div className="item5">{props.waddress}<div className="Balance">Finance Validator Wallet Address</div></div>
            </div>
				
				
			</div>
			<div style={{
    
                width: '500px',
				height: '250px',
				background: 'rgba(29,28,35,255)',
				color: 'white',
				margin: '10px',
                
				borderRadius: '10px',
                
			}} onClick={() => setFlip(!flip)}>
                <div className="card-content">
                <div className="card-content head">{props.name}</div>
                <br/>
                {props.content}
                </div>
                <Link to={`/Transactions/${props.address}`} >
				
                    <button className="flipbutton" style={{
                    
					width: '85px',
					padding: '10px',
					fontSize: '10px',
					background: '#04AA6D',
					fontWeight: 'bold',
					borderRadius: '10px',

                    
				}} >
					All Transactions</button>
                    </Link>
					<Link to={`/InternalTransactions/${props.address}`} >
				
                    <button className="flipbutton" style={{
                    
					width: '85px',
					padding: '10px',
					fontSize: '10px',
					background: '#04AA6D',
					fontWeight: 'bold',
					borderRadius: '10px',
					marginLeft:'290px'
                    
				}} >
					Contract Transactions</button>
                    </Link>
				</div>
                
			
		</ReactCardFlip>
        </div>
	);
}

export default FlipCard;
