import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import demoProfile from './demoProfile.png'

export default function Profile() {
  const navigate= useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [number,setNumber]=useState("");
  const [address,setAddress]=useState("");
  const initalize=async()=>{
    let login = localStorage.getItem("user");
    login=JSON.parse(login)
    if(!login){
 navigate("/signup")
    }
    else{
      console.log(login.user)
      let result =await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/auth/profile`,{
        headers:{
          user:login.user
        }
      })
      result = await result.json()
      console.log(result)
setName(result.first+" "+result.last);
setEmail(result.email);
setAddress(result.address);
setNumber(result.number)
    }
  }
  useEffect(()=>{
   initalize()
  },[])

 const handleLogOut =()=>{
  localStorage.clear()
  navigate("/")
 }
 const handelEdit =()=>{
navigate("/edit")
 }
  return (
    <>
    <div style={{"display":"flex","width":"100%","justifyContent":"center","position":"relative","top":"50px"}}>
   <h1>My Profile</h1>
    </div>
    
      <div style={{"margin-top":"50px"}}>
<div className="profileMainBox container" id="j"> 
	<button className="fullProfilePhotoBox">
<img className="profilePhotoFull" src={demoProfile}/>
</button>

 <div style={{"width":"100%","display":"flex","alignItems":"center","justifyContent":"center","margin":"10px"}}>
 <button onClick={handelEdit} className='profile-edit'>EDIT PROFILE</button>
 <button onClick={handleLogOut} className='profile-edit'>LOGOUT</button>
</div>

  <div className="profileDetailsBox">
    <h2>Name : {name}</h2>
    <h2>Address : {address}</h2>
    <h2>email : {email}</h2>
    <h2>Number : {number}</h2>
    <h2></h2>
  </div>
  </div>

 
</div>



    </>
  );
}
