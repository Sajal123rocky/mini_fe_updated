import React,{useEffect,useState,Component} from "react";
import MainLayout from '../mainlayout/MainLayout';
import {Link, useLocation,useParams} from "react-router-dom";
import projects from "../ProjectTransactions"
import Table from "../components/Table";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import {ethers} from 'ethers';
import  contract from '../../artifacts/contracts/ProjectHandler.sol/ProjectHandler.json';

// function Transactions() {
//   const { address } = useParams();
  
//   const contractAddress=address;
//   let loading=true;
//   //const sendContractTx=new ethers.Contract(contractAddress,contract.abi,walletProvider.getSigner());
//   useEffect(() => {
//     async function getTransactionHistory(){
//       const apiKey = 'UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7';
//       const apiUrl = "https://api-sepolia.etherscan.io/api?module=account&action=txlist&address="+contractAddress+"&startblock=0&endblock=99999999&page=1&offset=30&sort=asc&apikey=UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7"
//       const apiUrl2 = "https://api-sepolia.etherscan.io/api?module=account&action=txlistinternal&address="+contractAddress+"&startblock=0&endblock=99999999&page=1&offset=30&sort=asc&apikey=UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7"
    
//         response = await Axios.get(apiUrl);
//          transactions = response.data.result;
//         const response2 = await Axios.get(apiUrl2);
//         const transactions2 = response2;
//         loading=false;
//         // Process the transaction data as needed
//         console.log(transactions[0].hash);
//         console.log("internal transactions");
//         console.log(transactions2);
//     }
//     getTransactionHistory();
//   },[]);
    
  
//   const [selectValue, setSelectValue] = React.useState("");
//   const onChange = (event) => {
//     const value = event.target.value;
//     console.log(event.target.value);
//     setSelectValue(value);
//   };
  
//   if (loading) {
//     return (
//       <div>
//         <p>Loading...</p>
//       </div> 
//     );
//   }
//   return (
//     <MainLayout>
    
//       <div className='transaction-container'>
//       {/* <h1 style={{color:"white",marginLeft:"30px",paddingTop:"10px"}}>Transactions</h1>
//       <select  className="dropdown"style={{color:"black",marginLeft:"30px",paddingTop:"10px",textAlign:"center"}} onChange={onChange}>
//         <option defaultValue disabled>
//           Select Type
//         </option>
//         <option value="All">All</option>
//         <option value="Withdraw">Withdraw</option>
//         <option value="Deposit">Deposit</option>
//       </select> */}
//       <table>
//       <thead>
//         <tr>
//           <th>Hash</th>
//           <th>Function Name</th>
//           <th>From</th>
//           <th>To</th>
//           <th>Value</th>
//         </tr>
//       </thead>
//       <tbody>
//        <tr>
//         <td>
//           {transactions[0].hash}
//         </td>
//         <td>
         
//         </td>
//        </tr>
//       </tbody>
//     </table>
        
//     </div>
//     </MainLayout>
    
//   )
// }
function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}
class Transactions extends Component{
  
  constructor(props){
    super(props);
    this.state={
     
      hash:[],
      from:[],
      to:[],
      value:[],
      functionName:[],
      res:[],
      result:{},
      balance:"",
      addr:""
    }
  }
  async  componentDidMount(){
    const {address}=this.props.params;
    const apibal="https://api-sepolia.etherscan.io/api?module=account&action=balance&address="+address+"&tag=latest&apikey=UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7"
    const apiKey = 'UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7';
    const apiUrl = "https://api-sepolia.etherscan.io/api?module=account&action=txlist&address="+address+"&startblock=0&endblock=99999999&page=1&offset=30&sort=asc&apikey=UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7"
    //const apiUrl2 = "https://api-sepolia.etherscan.io/api?module=account&action=txlistinternal&address="+address+"&startblock=0&endblock=99999999&page=1&offset=30&sort=asc&apikey=UCH1QJ49W4YNXZ9KXFZ923CNNIJV3P12Y7"
  
      const etherscan = await Axios.get(apiUrl);
      const etherscanbal=await Axios.get(apibal);
      let resbal=etherscanbal.data.result;
      let bal=ethers.utils.formatEther(resbal);
      console.log("bal"+ethers.utils.formatEther(resbal));  
      let res=etherscan.data.result;
      console.log(res);
      console.log(etherscan);
     let hashes = etherscan.data.result.map(tx => tx.hash);
     let froms = etherscan.data.result.map(tx => tx.from);
     let tos = etherscan.data.result.map(tx => tx.to);
     let values = etherscan.data.result.map(tx => tx.value);
     let functionNames = etherscan.data.result.map(tx => tx.functionName);
     let results={
      h:hashes,
      f:froms,
      t:tos,
      v:values,
      fn:functionNames,
      
     }
       this.setState({
        from:froms,
        result:res,
        balance:bal,
        
       })
      
  }
  render(){
    const { address } = this.props.params;
    const {result,balance,from}=this.state;
    const obj=Array.from(result);
    function convert(timestamp) {
      const date = new Date(timestamp * 1000); 
      const conv = date.toLocaleString();
      return conv;
    }
    function trims(funcSignature){
    const funcName = funcSignature.split('(')[0];
    return funcName;
    }
    return(
      <MainLayout>
      <h1 style={{color:"white"}}>All Transactions</h1>
      <br></br>
      <div style={{color:"white"}}>
      <div style={{fontSize:"30px"}}>Balance: {balance}</div>
      <div>Contract creator:{from[0]}</div>
      {
        obj.map(res =>
        <div style={{margin:"10px",backgroundColor:"rgba(29,28,35,255)",width:"680px",height:"205px",margin:"auto",marginTop:"10px",paddingLeft:"10px",paddingTop:"10px",borderRadius:"10px"}}>
        <div>TXN HASH:{res.hash}</div><br></br>
        <div>From:{res.from}</div><br></br>
        <div>To:{res.to===""?"Contract Created ("+address+")":res.to}</div><br></br>
        <div>Date and Time:{convert(res.timeStamp)}</div><br></br>
        <div>Amount:{ethers.utils.formatEther(res.value)}</div><br></br>
        <div>Type:{res.functionName===""?"Deployed":trims(res.functionName)}</div>
        </div>
        )
      }
      <div>Dont't Trust us? <a href="https://sepolia.etherscan.io/" target="_blank" rel="noopener noreferrer" >Click here to verify</a></div>
      </div>  
      </MainLayout>   
    
    );
  };

}
export default withParams(Transactions);