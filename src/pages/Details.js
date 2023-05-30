/* eslint-disable */
import React from 'react'
import { Link } from "react-router-dom";
import MainLayout from '../mainlayout/MainLayout';

function Details() {
        const contractAddress=123;
        const project="project 1"
  return (
    
    <MainLayout>

      <div >
      <h2>
        About
      </h2>
      <p>
        This is project {project} with contractAddress {contractAddress}
      </p>
      <Link to="/Transactions">Click here to see transaction</Link>

    </div>
    </MainLayout>
    
  )
}

export default Details;