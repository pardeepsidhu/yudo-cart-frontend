import React,{useState,useEffect} from 'react'
import Item from '../components/Item'
import { useNavigate } from 'react-router-dom';
export default function ProductList() {
    const [prodicts,setProducts]=useState([]);
    const navigate = useNavigate()

    const getProducts = async ()=>{
      let result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/product/getproducts`);
      result = await result.json();
      setProducts(result)
    }
const handleDelete = async (id)=>{
  let result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/admin/deleteproduct/${id}`,{
    method:"delete"
  })
  result = await result.json();
  getProducts()

}

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

   useEffect(()=>{
    verify()
    getProducts()
   },[])
  return (
    <>
         <div className='product-list'>
      <h3>product list</h3>
   
      <ul>
        <li>S. No </li>
        <li>Name </li>
        <li>Price</li>
        <li>Company</li>
        <li>Storage</li>
        <li>Ram</li>
        <li>Arch</li>
        <li>Camera</li>
        <li>Front</li>
        <li>Rear</li>
        <li>Battery</li>
        <li>Operations</li>
      </ul>
   
   {
    prodicts.map((item,index)=>{
      return  <ul>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.company}</li>
        <li>{item.storage}</li>
        <li>{item.ram}</li>
        <li>{item.arch}</li>
        <li>{item.cCount}</li>
        <li>{item.front}</li>
        <li>{item.rear}</li>
        <li>{item.battery}</li>
        <li><button className="productDeleteButton" onClick={()=>handleDelete(item._id)} > del </button></li>
      </ul>
    })
   }
    </div>
    </>
  )
}
