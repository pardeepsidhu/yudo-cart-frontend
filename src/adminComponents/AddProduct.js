import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {
const [name,setName] = useState("")
const [company,setCompany]=useState("")
const [img,setImg]=useState("")
const [price,setPrice]=useState("")
const [cCount,setCCount]=useState("")
const [rear,setRear]=useState("")
const [front,setFront]=useState("")
const [storage,setStorege]=useState("")
const [ram,setRam]=useState("")
const [net,setNet]=useState("")
const [battery,setBattery]=useState("")
const [arch,setArch]=useState("64")
const navigate=useNavigate()
const verify=async()=>{
  let login = localStorage.getItem("user");
    if(!login){
 navigate("/")
    }
    else{
      login=JSON.parse(login)
      let result =await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/auth/profile`,{
        headers:{
          user:login.user
        }
      })
      result = await result.json()
      if(result.email !==process.env.REACT_APP_DEVELOPER_EMAIL){
        navigate("/")
      }
    }
}
const handleSubmit = async()=>{
  let result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/admin/addproduct`,{
    method:"post",
    body:JSON.stringify({name:name,front:front,rear:rear,price:price,company:company,cCount:cCount,network:net,arch:arch,battery:battery,img:img,storage:storage,ram:ram}),
    headers:{
      "content-type":"application/json"
    }
  })
  setName("")
}
useEffect(()=>{
  verify()
})



  return (
    <div className='addProduct'>
        <h3 style={{"color":"black"}}>ADD PRODUCT</h3>
        <img style={{height:"50px",width:"100px",border:"1px solid black",color:"black"}} alt="Image" src={img}/>
      <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='name' />
      <input type='text' value={img} onChange={(e)=>{setImg(e.target.value)}} placeholder='image' />
      <input type='text' value={company} onChange={(e)=>{setCompany(e.target.value)}} placeholder='company' />
      <input type='text' value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='price' />
      <input type='text' value={cCount} onChange={(e)=>{setCCount(e.target.value)}} placeholder='camera count' />
      <input type='text' value={rear} onChange={(e)=>{setRear(e.target.value)}} placeholder='rear' />
      <input type='text' value={front} onChange={(e)=>{setFront(e.target.value)}} placeholder='front' />
      <input type='text' value={storage} onChange={(e)=>{setStorege(e.target.value)}} placeholder='storage' />
      <input type='text' value={ram} onChange={(e)=>{setRam(e.target.value)}} placeholder='ram' />
      <input type='text' value={net} onChange={(e)=>{setNet(e.target.value)}} placeholder='network' />
      <input type='text' value={battery} onChange={(e)=>{setBattery(e.target.value)}} placeholder='battery' />
      <input type='text' value={arch} onChange={(e)=>{setArch(e.target.value)}} placeholder='arch' />
    <input type="button" onClick={handleSubmit} style={{"color":"gray"}} className="submitResetBtn" value="Submit" />
    </div>
  )
}
