import React, { useEffect, useState } from 'react'

export default function Error() {

 
 const [second,setSecond] = useState(5)
 function decrement(){
 let x=second-1;
 setSecond(x)
 if(x===0){
  window.location.pathname="/"
 }
 }
 useEffect(()=>{
  setInterval(decrement,1000)
 },[second])
 
  return (
    <div className='container'>
    <center>
        <h1 style={{"fontSize":"100px", "text-shadow":"7px 7px 10px black , -7px -7px 10px black"}}>&lt;Page Does Not Exist&gt; </h1>
        <h1 style={{ "text-shadow":"3px 3px 5px black , -3px -3px 5px black"}}>( : We Are Connecting You To Home Page in {second}  s : )</h1>
        </center>
    </div>
  )
}
