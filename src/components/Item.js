import React from 'react'

import {useState , useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Item(props) {
   
  const navigate = useNavigate()
  const [one,setOne]=useState(0);
  const [cartVal,setCartVal]=useState("Add To Cart");
  const evalCartVal=async()=>{
    let user = localStorage.getItem('user');
    if(user){
      user = JSON.parse(user);
      let result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/cart/cart`,{
        method:"post",
        body:JSON.stringify({thisProduct:props._id}),
        headers:{
          "content-type":"application/json",
          user:user.user
        }
      })
      result= await result.json()
      if(result.result==="exist"){
        setCartVal("Remove From Cart")
        if(window.location.pathname ==="/cart"){
          navigate("/cart")   
           }
      }
        }
  }
  
useEffect(()=>{
  if(one ===0){
  evalCartVal() 
  setOne(1);
}
})

  const addToCart= async(_id) =>{
    let user = localStorage.getItem('user');
    if(user){
         user = JSON.parse(user)
   let result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/cart/addtocart`,{
    method:"post",
    body:JSON.stringify({newProduct:_id}),
    headers:{
      "content-type":"application/json",
      user:user.user
    }
   })
   result = await result.json()
   if(result.result==="removed from cart"){
    setCartVal("Add To Cart");

   }
   else{
    setCartVal("Remove From Cart")
   }
    }
    else{
      navigate("/signup")
    }
  }
  return (
    <>
    <div className="item">
   <div className="imageBox"> 
    <Link className="itemImage" to={"/product/"+props._id}   alt="not avalible">  <img  width='360px' height='200px' src={props.img}  alt="not avalible"/> </Link>
    </div>
   <div className="imgproBox">
   <div className="propertyBox">
     <h2 className="itemNamePrice" align="center">{props.name} </h2>
     <h3 className="itemPrice">  </h3>
   </div>
   <div className="shopNameBox"><h2>&#8377; {props.price}</h2></div>
   <div className="buyBox">
    <a className="cartButton buttonsXp" onClick={()=>addToCart(props._id) } >{cartVal}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
</svg> </a>
     <a className="purchaseButton buttonsXp" href={"/purchase/"+props._id} >Purchase <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-cash-coin" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
</svg></a>
   </div>
 </div>
   </div>
   </>
  )
}

