import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";


function FlipCard(props) {
	
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
                <Link to='/Success' >
				
                    <button className="flipbutton" onclick="confirm('hello')" style={{
                    
					width: '85px',
					padding: '10px',
					fontSize: '10px',
					background: '#04AA6D',
					fontWeight: 'bold',
					borderRadius: '10px',
                    
				}} >
					Close</button>
                    </Link>
				</div>
                
			
		</ReactCardFlip>
        </div>
	);
}

export default FlipCard;
