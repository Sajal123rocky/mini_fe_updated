
import MainLayout from '../mainlayout/MainLayout';
import {Link, useLocation} from "react-router-dom";
import React ,{useEffect,useState} from 'react'
import Table from "../components/Table";
import requestp from "../../projectrequest"
function Transactions(props) {
  //       id:1,
  //       amount:1000,
  //       name:"joe",
  //       to:"doe",
  //       type:"wilidraw",
  //       url:"link1"
  const [projectList,setProjectList]=useState([]);
  useEffect(() =>{
    async function fetchProjectList() {
      try{
        const requestUrl='http://127.0.0.1:8000/request';
        const response = await fetch(requestUrl);
        const responseJSON=await response.json();
        console.log(responseJSON);
        setProjectList(responseJSON);
      }
      catch{}
    }
    fetchProjectList();
  },[]);
  function createTable(entry) {
    return (
      <Table
        key={entry._id}
        requestid={entry._id}
        transid={entry.recipientWalletAddress}
        name={entry.projectTitle}
        // to={entry.to}
        // type={entry.type}
        url={entry.billProofLink}
        amount={entry.amount}
        address={entry.contractAddress}
        // status={entry.status}
      />
    );
  }
  const [selectValue, setSelectValue] = React.useState("");
  const onChange = (event) => {
    const value = event.target.value;
    console.log(event.target.value);
    setSelectValue(value);
  };
  return (
    <MainLayout>
      <div className='transaction-container'>
      <h1 style={{color:"white",marginLeft:"30px",paddingTop:"10px"}}>Requests</h1>
      {/* <select  className="dropdown"style={{color:"black",marginLeft:"30px",paddingTop:"10px",textAlign:"center"}} onChange={onChange}>
        <option defaultValue disabled>
          Select Type
        </option>
        <option value="All">All</option>
        <option value="Withdraw">Withdraw</option>
        <option value="Deposit">Deposit</option>
      </select>
      */}
        {/* <ul className="tablelist">
        <li className="tli">Id</li>
        <li className="tli">From</li>
        <li className="tli">To</li>
        <li className="tli">Amt</li>
        <li className="tli">Type</li>
        <li className="tli">Link</li>
        </ul>
         */}
         
        {projectList.map(createTable)}  
       {/* {selectValue==="All" ? projects.map(createTable): projects.filter(createTable => createTable.type.includes(selectValue)).map(createTable)} */}
      {/* {projects.filter(createTable => createTable.type.includes(selectValue)).map(createTable)} */}
    </div>
    </MainLayout>
    
  )
}

export default Transactions;