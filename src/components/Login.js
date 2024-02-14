import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [err,setErr]=useState(false);



const navigate =useNavigate();
  const handleLogin=async()=>{
   let result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/auth/login`,{
    method:"post",
    body:JSON.stringify({email,password}),
    headers:
    {
      "content-type":"application/json"
    }
   })
   result = await result.json()
   if(result.result === "please fill correct details"){
    setErr(true);
   }
   else{
  localStorage.setItem("user",JSON.stringify(result))
  navigate("/")
   }
  }
  useEffect(()=>{
    let result = localStorage.getItem("user");
    if(result){
      navigate("/")
    }
  },[])
  return (
    <>
    
    <form id="formOuterBox">
        <fieldset id="mainRegisterBox" style={{"height":"300px"}} >
            <legend  ><h1 align="center" >LOGIN</h1></legend>
    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="inputRegister" placeholder=" &nbsp; &nbsp; &nbsp; &nbsp;Enter Email Here..." />
    <input type="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  className="inputRegister" placeholder=" &nbsp; &nbsp; &nbsp; &nbsp;Enter Password Here..." />
    { err && <div className='invalidInfo'>{<span>User Not Exist</span>}</div> }
  
    <div id="submitResetBox" >
        <input type="button" onClick={handleLogin} className="submitResetBtn" value="Submit" />
    </div>
  

</fieldset>
    </form>

    </>
  )
}
