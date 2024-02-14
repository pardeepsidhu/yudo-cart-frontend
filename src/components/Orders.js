import React,{useState,useEffect} from 'react';
import ItemStructure from './Structures/ItemStructure'

export default function Orders(props){
   const [products,setProducts]=useState([]);
   const [one,setOne]=useState(0)
   const [deleted,setDeleted]=useState(false);
  const [waiting,setWaiting]= useState(true)

   const getData =async()=>{
    let user = localStorage.getItem('user');
    if(user){
      user = JSON.parse(user);
      let result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/purchase/getpurchases`,{
        headers:{
          user:user.user
        }  
      })
      result =await result.json()
      setProducts(result)
      setWaiting(false)
    }
   }

const hide =()=>{
  setDeleted(false)
}
   useEffect(()=>{
if(one ===0){
getData()
  setOne(1)
}   
   })

   const handleCancle =async(id,date)=>{
     let user = localStorage.getItem('user');
     user = JSON.parse(user)
    let result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/purchase/deletepurchases/${id}`,{
    method:"delete",
    body:JSON.stringify({date:date}),
    headers:{
      "content-type":"application/json",
      user:user.user
    }
   })
    setDeleted(true)
   getData()

   }
	return(
		<>
   <div className='itemBox orderBox'>
{
waiting ? <><ItemStructure /> <ItemStructure /> <ItemStructure /> <ItemStructure /> <ItemStructure /> <ItemStructure /> </>  :
 products.length >0 ?
products.map((item)=>{
  return (
  <div className="item">
   <div className="imageBox"> 
    <a className="itemImage" href={"/product/"+item._id}  alt="not avalible">  <img  width='360px' height='200px' src={item.img}  alt="not avalible"/> </a>
    </div>
   <div className="imgproBox">
   <div className="propertyBox orderPropBox">
    <span>Product : {item.name}</span>
        <span>Date : {(item.date.split("-")[2]).split('T')[0]+"-"+(item.date.split("-")[1])+"-"+(item.date.split("-")[0])+" | "+(item.date.split("T")[1]).split(".")[0]}</span>
         <span>Price: &#8377; {item.price}</span>
            <span>status: Dilvery Pending</span>
   </div>
   <div className="shopNameBox">

 <a className="cartButton buttonsXp cancleBtn" onClick={()=>handleCancle(item._id,item.date)} ><h2>Cancle</h2></a>
   </div>
 </div>
   </div> )
})  
    :
    <h1>No Order Exist</h1>
  }

    {deleted && <div style={{"display":"flex"}} className='alert' id='v'>
    <div className='alertBox' id="alertx">
    <h2 style={{"position":"relative","top":"18px"}} >Cancled</h2>
    <button onClick={hide} style={{"textShadow": "1px 1px 2px black,-1px -1px 2px black","marginTop":"30px"}} className="btnBoxes" >OK</button>
    </div>
    </div> }

   </div>
		</>
		)
}