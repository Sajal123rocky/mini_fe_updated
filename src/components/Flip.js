/* eslint-disable */
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import Transactions from "../pages/Transactions";

function Flip(props) {
	const [flip, setFlip] = useState(false);
	return (
        <div className="flipCard">
		<ReactCardFlip isFlipped={flip}
			flipDirection="horizontal" >
            
			<div style={{
                
				width: '250px',
				height: '250px',
				background: 'rgba(29,28,35,255)',
				color: 'white',
				margin: '10px',
                
				borderRadius: '10%',
				
			}} onClick={() => setFlip(!flip)}>
            <img src={props.img} alt="none" className="item5"/> 
            <div className="getstartedname">{props.name}</div>
			
				
				
			</div>
			<div style={{
    
                width: '250px',
				height: '250px',
				background: 'rgba(29,28,35,255)',
				color: 'white',
				margin: '10px',
                
				borderRadius: '10%',
                
			}} onClick={() => setFlip(!flip)}>
                <div style={{}}><h3 style={{textAlign:"center" ,textDecoration:"underline"}}>{props.type}</h3>
				<div style={{margin:"22px",textAlign:"justify",lineHeight:"1.6"}}>{props.content}</div></div>
                {/* <Link to='/Transactions' >
                    <button className="flipbutton" style={{
                    
					width: '85px',
					padding: '10px',
					fontSize: '10px',
					background: '#04AA6D',
					fontWeight: 'bold',
					borderRadius: '10px',
                    
				}} >
					Transactions</button>
                    </Link> */}
				</div>
                
			
		</ReactCardFlip>
        </div>
	);
}

export default Flip;
