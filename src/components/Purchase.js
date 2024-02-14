import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'


export default function Purchase() {
    const navigate = useNavigate();
    const [thisObj,setThisObj]=useState({});
    const [user,setUser]=useState({});
    const [address2,setAddress2]=useState("");
    const [number2,setNumber2]=useState("");
    const [purchased,setPurcahsed]=useState(false)
    const [one,setOne]=useState(0)
    const [addressErr,setAddressErr]=useState("none")
  const [numberErr,setNumberErr]=useState("none")

   const [display,setDisplay]=useState({"display":"flex"})
      const hide= ()=>{
        setDisplay({"display":"none"})
        navigate("/orders")
    }

     let {id} = useParams();
    const getProduct = async()=>{
        let result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/product/getproduct/${id}`);
        result = await result.json();
        setThisObj(result)
    }

    const getUser=async()=>{
let user1 = localStorage.getItem('user');
if(user){
    user1 = JSON.parse(user1);
    let result =await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/auth/profile`,{
      headers:{
        user:user1.user
      }
    })
    result = await result.json()
    setUser(result)
}
else{
navigate("/signup")
}
    }
useEffect(()=>{
    getUser()
    getProduct()
},[])

const handlePurchase = async()=>{
let user = localStorage.getItem('user');
user =JSON.parse(user)
let isNumber2 = number2[0]==='9' || number2[0]==='8' || number2[0]==='7' || number2[0]==='6' 
if(isNumber2 && number2.length>9 && address2.length>11){
  console.log("workedws3")
    let result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/purchase/purchase/${thisObj._id}`,{
    method:"post",
    body:JSON.stringify({address2:address2,number2:number2}),
    headers:{
        "content-type":"application/json",
        user:user.user
    }
})
if(result){
  setPurcahsed(true) 
}
}
else{
    if(!isNumber2){
         setNumberErr("Please Enter A Valid Number")
    }
   else{
     setNumberErr("none")
   }
   if(number2.length<10){
    setNumberErr("Please Enter A Valid Number")
}
else{
setNumberErr("none")
}
   if(address2.length<12){
    setAddressErr("Address Must Have At Least 12 Characters")
   }
   else{
     setAddressErr("none")
   }
}

}
  return (
    <>
<form id="formOuterBox">
  {purchased && <div style={display} className='alert' id='v'>
    <div className='alertBox' id="alertx">
    <h2 style={{"position":"relative","top":"18px"}} >Purchased</h2>
    <button onClick={hide} style={{"textShadow": "1px 1px 2px black,-1px -1px 2px black","marginTop":"30px"}} className="btnBoxes" >OK</button>
    </div>
    </div> }
        <fieldset id="mainRegisterBox" >
            <legend  ><h1 align="center" >PURCHASE</h1></legend>
   <input type="text" id="registerName" value={user.first} placeholder=" &nbsp; &nbsp; &nbsp; &nbsp;First Name..."></input>
   <input type="text" id="registerLastName" value={user.last} placeholder=" &nbsp; &nbsp; &nbsp; &nbsp;First Name..."></input>
    <input type="disabled" value={user.email}  className="inputRegister" placeholder=" &nbsp; &nbsp; &nbsp; &nbsp;Enter Email Here..." />
    <input type="disabled" value={user.number} className="inputRegister" placeholder=" &nbsp; &nbsp; &nbsp; &nbsp;Enter Number Here" />
    <input type="tel" pattern="[1-9]{1}[0-9]{9}" maxLength="10" value={number2} onChange={(e)=>{setNumber2(e.target.value)}} className="inputRegister" placeholder=" &nbsp; &nbsp; &nbsp; &nbsp;Enter Alternative Number Here..." />
   { numberErr.length>4 && <div className='invalidInfo'>{<span>{numberErr}</span>}</div> }
    <input type="text"  className="inputRegister" value={user.address} placeholder=" &nbsp; &nbsp; &nbsp; &nbsp;Enter Adderss Here..." />
    <input type="text" value={address2} onChange={(e)=>{setAddress2(e.target.value)}}  className="inputRegister" placeholder=" &nbsp; &nbsp; &nbsp; &nbsp;Enter Second Address Here..." />
   { addressErr.length >4 && <div className='invalidInfo'>{<span>{addressErr}</span>}</div> }
    <input type="disabled"  className="inputRegister" value={thisObj.company+" "+thisObj.name} />
    <div id="submitResetBox" >
        <input type="button" onClick={handlePurchase} className="submitResetBtn" value="Purchase" />
    </div>
</fieldset>
    </form>
   
    </>
  )
}
