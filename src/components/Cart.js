import React from 'react'
import Item from './Item'
import {useEffect ,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import ItemStructure from './Structures/ItemStructure'


export default function Cart() { 
let tempData = [];
const [data,setData]=useState([]);
const [one,setOne]=useState(0)
const navigate = useNavigate()
const [cartObj,setCartObj]=useState([])
  const [waiting,setWaiting]= useState(true)

const getData =async()=>{
  let user = localStorage.getItem('user');
  if(!user){
    navigate("/Signup")
  }
  else{
    user = JSON.parse(user);
    let result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/cart/cart`,{
      headers:{
        user:user.user
      }
    })
     result = await result.json();
     if(result.result!=="empty cart"){
   setCartObj(result.result);
     }
  }
    setWaiting(false) 
}
   useEffect(()=>{
    getData()
   })

 
  return (
  <>
  <div style={{"width":"100%","display":"flex","alignItems":"center","justifyContent":"center"}}><h1>CART</h1></div>

  <div className="itemBox" id="itemBoxId"> 

{ 
waiting ? <><ItemStructure /> <ItemStructure /> <ItemStructure /> <ItemStructure /> <ItemStructure /> <ItemStructure /> </>  :
  cartObj.length > 0 ?  cartObj.map((Element) => {
  return <Item price={Element.price} name={Element.company+" "+Element.name} _id={Element._id} img={Element.img} />
}) : <h1>EMPTY CART</h1> }
    </div>

  </>
  )
}
