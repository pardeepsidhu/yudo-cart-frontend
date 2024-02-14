import React, { useEffect, useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom';
import validator from 'validator'

export default function Register() {
  const [last,setLast]=useState("");
  const [first,setFirst]=useState("");
  const [email,setEmail]=useState("");
  const [address,setAddress]=useState("");
  const [password,setPassword]=useState("");
  const [number,setNumber]=useState("")
  const [cpassword,setCpassword]=useState("");
  const [term,setTerm]=useState(false);
  const [err,setErr]=useState(false);
  const [termErr,setTermErr]=useState("none")
  const [nameErr,setNameErr]=useState("none")
  const [emailErr,setEmailErr]=useState("none")
  const [addressErr,setAddressErr]=useState("none")
  const [numberErr,setNumberErr]=useState("none")
  const [passwordErr,setPasswordErr]=useState("none")
  const [cPasswordErr,setCPasswordErr]=useState("none")
  const [errText,setErrText]=useState("")
  const navigate =useNavigate();
 
  useEffect(()=>{
   let result= localStorage.getItem('user')
   if(result){
    navigate("/profile")
   }
  },[])
  const handleSubmit=async ()=>{
    
    let isNumber = number[0]==='9' || number[0]==='8' || number[0]==='7' || number[0]==='6' 
    if( number.length >9 && isNumber && first.length>3 && last.length>3 && password.length>7 && cpassword===password && address.length>12 && validator.isEmail(email) && term){
      if(password !== cpassword){
        setErrText("Password Does Not Match");
      }
      else{
   let result =await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/auth/Register`,{
    method:"post",
    body:JSON.stringify({first,last,password,address,email,number}),
    headers:{
      "content-type":"application/json"
    }
   })
   result = await result.json();
   if(result.result==="user already exist"){
    setNumberErr("User Exist With Same Email Or Number");
    setEmailErr("User Exist With Same Email Or Number");
    setErr(true)
   }
   else{
   localStorage.setItem('user',JSON.stringify(result))
   navigate('/');
  } }
  }
  else{
   if(!term){
    setTermErr('Please Accept Term And Conditions')
   }
   else{
    setTermErr("none")
   }
   if(password.length<7){
    setPasswordErr("Password Length Must Be At Least 8 ")
   }
   else{
    setPasswordErr('none')
   }
   if(cpassword !==password){
    setCPasswordErr("Password Does Not Match")
   }
   else{
    setCPasswordErr('none')
   }
   if(address.length<13){
    setAddressErr("Address Must Have 12 Characters")
   }
   else{
    setAddressErr("none")
   }
   if(first.length <4 || last.length <4){
    setNameErr('First Name And Last Name Must Have 4 Characters')
   }
   else{
    setNameErr('none')
   }
   if(!validator.isEmail(email)){
    setEmailErr("Plese Enter Correct Email")
   }
   else{
    setEmailErr('none')
   }
   if(!isNumber || number.length <10){
    setNumberErr("Please Enter Correct Number")
   }
   else{
    setNumberErr('none')
   }
  }
}
  return (
    <>
    
     <form id="formOuterBox">
        <fieldset id="mainRegisterBox" >
            <legend  ><h1 align="center" >Register</h1></legend>
   <input type="text" id="registerName" value={first} onChange={(e)=>{setFirst(e.target.value)}} placeholder="    First Name..."></input>
   <input type="text" id="registerLastName" onChange={(e)=>{setLast(e.target.value)}} placeholder="    Last Name..."></input>
  { nameErr.length>4 && <div className='invalidInfo'>{<span>{nameErr}</span>}</div> }
    <input type="tel" pattern="[1-9]{1}[0-9]{9}" maxLength="10" value={number} onChange={(e)=>{setNumber(e.target.value)}}  className="inputRegister" placeholder="    Enter Number Here..." />
   { numberErr.length>4 && <div className='invalidInfo'>{<span>{numberErr}</span>}</div> }
   <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="inputRegister" placeholder="    Enter Email Here..." />
    { emailErr.length>4 && <div className='invalidInfo'>{<span>{emailErr}</span>}</div> }
    <input type="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  className="inputRegister" placeholder="    Create A Password..." />
    { passwordErr.length>4 && <div className='invalidInfo'>{<span>{passwordErr}</span>}</div> }

    <input type="Password" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} className="inputRegister" placeholder="    Confirm Password..." />
   { cPasswordErr.length >4 && <div className='invalidInfo'>{<span>{cPasswordErr}</span>}</div> }
    <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}}  className="inputRegister" placeholder="    Enter Address Here..." />
    { addressErr.length >4 && <div className='invalidInfo'>{<span>{addressErr}</span>}</div> }
   <div id="haveAccountBox">
        <input type="checkbox" value='1'  onChange={(e)=>{setTerm(e.target.value)}} />  <span> I Accept Terms And Conditions | </span> <span> Already Registered  </span>
        <Link to="/login"><span id="logInLink" style={{"color":"red"}}>Log In</span></Link>
    </div>
    { termErr.length >4 && <div className='invalidInfo'>{<span>{termErr}</span>}</div> }
    <div id="submitResetBox" >
        <input type="button" onClick={handleSubmit} className="submitResetBtn" value="Submit" />
       
    </div>
  
   
</fieldset>
    </form>

    </>
  )
}
