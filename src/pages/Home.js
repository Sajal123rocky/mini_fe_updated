import React from 'react'
import MainLayout from '../mainlayout/MainLayout';
import {Link} from "react-router-dom"


function Home() {
    
  return (
    
    <MainLayout>
      <div className='home-head'>
      <div className="homeheadline">THE FUTURE OF FUNDING IS HERE</div>
      {/* <p className="home-tagline">Discover the new and safest experience with BlockChain</p> */}
      <div style={{}}>
      <img className="home-image" src="blockchain-technology-security-template-vector-data-payment-securing-blog-banner_53876-112174.avif" alt="none"
        style={{}}
      />
      <div className="home1"><h2 style={{textAlign:"center", marginTop:"15px",textDecoration:"underline"}}>OUR VISION</h2><br/>
      <p style={{textAlign:"center",fontSize:"25px",margin:"10px"}}>We’re Changing the Way the World Thinks About Funding</p>
      
      <p style={{fontSize:"19px" ,lineHeight:"1.8",textAlign:"justify",margin:"5px 15px"}}>The potential for a blockchain-based fund system to completely transform how we invest,
manage, and distribute money is enormous. Using blockchain technology, the system produces a distributed ledger that records all transactions in a transparent and immutable manner, making data tampering difficult.</p>
<Link to='/GetStarted'><button style={{
                    
                    width: '120px',
                    padding: '10px',
                    fontSize: '10px',
                    background: '#04AA6D',
                    fontWeight: 'bold',
                    borderRadius: '20px',
                    marginLeft: '135px'          
                  }}>Get Started</button></Link>
</div>

</div>
      {/* <div className="home2"><h2 style={{textAlign:"center", marginTop:"15px"}}>CLICK IMAGE TO GET STARTED</h2>
      <br></br>
      <br></br>
      <Link to="/GetStarted">
      <img style={{margin:"60px 80px" ,width:"50%"}} src="ethbutton.jpeg" alt="none"/>
      </Link></div> */}
      <br></br>
       {/* <Link to='/GetStarted'>
       <button className="home-button" style={{
                    
                    width: '85px',
                    padding: '10px',
                    fontSize: '10px',
                    background: '#04AA6D',
                    fontWeight: 'bold',
                    borderRadius: '10px',
                              
                  }} >
                    GetStarted</button>  
      </Link>  */}
    </div>
    </MainLayout>
    
  )
}

export default Home;