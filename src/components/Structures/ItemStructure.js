import React,{useEffect,useState} from 'react'

export default function ItemStructure(){
   

	return(
<> 

<div className="item">
   <div className="imageBox structure" > 
    <a className="itemImage" > <div  width='360px' height='200px'  alt="not avalible"></div> </a>
    </div>
   <div className="imgproBox">
   <div className="propertyBox structure">
     <h2 className="itemNamePrice" align="center"></h2>
     <h3 className="itemPrice">  </h3>
   </div>
   <div className="shopNameBox"></div>
   <div className="buyBox structure">
    <a className="cartButton buttonsXp structure" > </a>
     <a className="purchaseButton buttonsXp structure"  > </a>
   </div>
 </div>
   </div>
</>
		)
}