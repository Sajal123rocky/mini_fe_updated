import React,{useEffect,useState,Component} from "react";
import MainLayout from '../mainlayout/MainLayout';
import {Link, useLocation,useParams} from "react-router-dom";
import projects from "../ProjectTransactions"
import Table from "../components/Table";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import {ethers} from 'ethers';
import  contract from '../../artifacts/contracts/ProjectHandler.sol/ProjectHandler.json';
import image from '../../public/images_cleanup.jpg'
import image2 from '../../public/How-do-Ethereum-Transacions-Work.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
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
      addr:"",
       selectedFilter: "All", 
    }
  }
   handleFilterChange = (event) => {
    this.setState({ selectedFilter: event.target.value });
  };
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
        addr:address
       })
      
  }
  render(){
    const { address } = this.props.params;
   
    const {result,balance,addr}=this.state;
    const obj=Array.from(result);
    obj.reverse();
    const filteredTransactions =
      this.state.selectedFilter === "All"
        ? obj
        : obj.filter((res) => res.functionName === this.state.selectedFilter);

    function convert(timestamp) {
      const date = new Date(timestamp * 1000); 
      const conv = date.toLocaleString();
      return conv;
    }
    function trims(funcSignature){
    const funcName = funcSignature.split('(')[0];
    return funcName;
    }
    function handleCopy(){}//hello
    return(
      <MainLayout>
      <h1 style={{color:"white"}}>All Transactions</h1>
      <br></br>
       <Link style={{color:"white"}}to={`/Transactions/${addr}`} >
					<button>All Transactions</button></Link>
          <br></br>
      <Link style={{color:"white"}}to={`/InternalTransactions/${addr}`} >
					<button>Contract Transactions</button></Link>
      <div style={{color:"white"}}>
      <span style={{fontSize:"30px"}}>Balance: {balance}</span>
       <select value={this.state.selectedFilter} onChange={this.handleFilterChange}>
            <option value="All">All</option>
            <option value="Deposit()">Deposit</option>
            <option value="projectCompleted()">Project Completed</option>
            <option value="withdraw(address token, uint256 amount)">Withdraw</option>
            {/* Add other options based on available function names */}
          </select>
      {
        filteredTransactions.map(res =>
        <div style={{margin:"10px",width:"680px",height:"210px",margin:"auto",marginTop:"10px",paddingLeft:"10px",paddingTop:"10px",borderRadius:"10px",backgroundSize: 'cover',backgroundPosition: 'center', backgroundColor:'rgba(29,28,35,255)'}}>
        <div >TXN HASH:{res.hash}</div><br></br>
        <div>From:{res.from}</div><br></br>
        <div>To:{res.to===""?"Contract Created ("+address+")":res.to}</div><br></br>
        <div style={{}}>Date and Time:{convert(res.timeStamp)}</div><br></br>
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