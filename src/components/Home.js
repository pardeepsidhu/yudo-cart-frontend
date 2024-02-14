import React, { useEffect, useState } from 'react'
import Item from './Item'
import r from './Navbar'
import Recentitem from './Recentitem'
import ItemStructure from './Structures/ItemStructure'




export default function(props) {
  const [stateData,setStateData]=useState([]);
  const [one,setOne]=useState(0);
  const [recents,setRecents]=useState([]);
  const [waiting,setWaiting]= useState(true)
  const [s,setS] =useState([])
  const [searchValue,setSearchValue]=useState("")
  const [min,setMin]=useState('')
  const [max,setMax]=useState('')
  const [brand,setBrand]=useState("All")
  const [ram,setRam]=useState('')
  const [storage,setStorage]=useState("")
  const [price,setPrice]=useState(false)


const demonSeartch=(keys)=>{
  if(keys!==undefined){
    if(keys.length>0){
    keys = keys.split(" ")
    if(keys[keys.length-1]===''){
      keys.pop()
    }
    keys.forEach((key)=>{
      s.map((item)=>{
        for(let objKey in item){
         if(key.toString().toUpperCase()===item[objKey].toString().toUpperCase()){
          item.sVal++;
         }
        }
      })
    })
    let demoResult = s;
    for(let i=0; i<demoResult.length-1; i++){
     for(let j=0; j<demoResult.length-i-1; j++){
       if(demoResult[j].sVal < demoResult[j+1].sVal){
         let temp = demoResult[j]
         demoResult[j]=demoResult[j+1];
         demoResult[j+1]=temp;
       }
     }
    }
    setStateData(demoResult);
  } else{
    getData()
  }
}
  else{
    getData()
  }
}

  let result=[];
  const getData = async()=>{
    result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/product/getproducts`);
    result = await result.json()
    setStateData(result)
    let sResult = result;
    sResult.map((item)=>{
      item.sVal=0;
    })
  
      setS(sResult)
  }

  const getRecents = async ()=>{
    let user = localStorage.getItem("user")
    if(user){
      user = JSON.parse(user);
      let result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/product/getrecents`,{
        headers:{
          user:user.user
        }
      });
      result = await result.json();
      if(result.length>1){
          result.reverse()
      }
     setRecents(result)
    }
    setWaiting(false)
  }

 if(props.data.data !== searchValue){
  demonSeartch(props.data.data)
  setSearchValue(props.data.data)
 }
 


  useEffect(()=>{
  if(one ===0){
    setOne(1)
     getData()
    }
    
     
    
    getRecents();
   
  })

const handleFilterBtn =()=>{
document.getElementById("filters").style.display="flex"
getData()
}

const handleApply =()=>{
  document.getElementById("filters").style.display="none"
 
  if(min !=="" || max !=="" || price !==false || ram !=="" || storage !=="" || brand !=="All"){
     let demoResult = stateData;
if(min !==""){
 demoResult = demoResult.filter((item)=>{
  return Number(item.price) >= Number(min)
 })
}
if(max !==""){
 demoResult = demoResult.filter((item)=>{
  return Number(item.price) <= Number(max)
 })
}

if(ram !==""){
 demoResult = demoResult.filter((item)=>{
  return Number(item.ram) >= Number(ram)
 })
}

if(storage !==""){
 demoResult = demoResult.filter((item)=>{
  return Number(item.storage) >= Number(storage)
 })
}
if(storage !==""){
 demoResult = demoResult.filter((item)=>{
  return Number(item.storage) >= Number(storage)
 })
}
if(brand !=="All"){
 demoResult = demoResult.filter((item)=>{
  return item.company.toUpperCase() === brand.toUpperCase()
 })
}
  if(price===true){
    for(let i=0; i<demoResult.length-1; i++){
      for(let j=0; j<demoResult.length-i-1; j++){
        if(Number(demoResult[j].price )> Number(demoResult[j+1].price)){
          let temp = demoResult[j]
          demoResult[j]=demoResult[j+1];
          demoResult[j+1]=temp;
        }
      }
     }
  }
  setStateData(demoResult)
}
else{
  getData()
}
}
  return (
    <>
    <div className='filterBox'>
      <div className='filterBoxInnerBox'>
        <button onClick={handleFilterBtn} className='filterBtn'>Filters</button>
      </div>
      </div> 
     {/* FILTERS */}
     <div className='filterContainer' style={{"display":"none"}} id="filters" >
<div className='filterContainerInner' >
    <div className='filterHedingBox'>
<h1>Filters</h1>
    </div>
   <div className='filterPropBox'>
    <div style={{"margin":"5px"}} className='filterProp'> <strong>Sort By Price <input id='sortCheck' onClick={()=>price?setPrice(false):setPrice(true)} type='checkBox' /></strong> </div>
    <div style={{"margin":"5px"}} className='filterProp'> <strong>Price : <input id='priceFrom' onChange={(e)=>setMin(e.target.value)} type='number' />To<input id='priceTo' onChange={(e)=>setMax(e.target.value)} type='number' /> </strong> </div>
    <div style={{"margin":"5px"}} className='filterProp'> <strong> Brand : <select onChange={(e)=>setBrand(e.target.value)} id='selectBrand'> 
    <option defaultValue  value={"All"}>All</option>
      <option value={"redmi"}>Redmi</option>
      <option value={"samsung"}>Samsung</option>
      <option value={"apple"}>Apple</option>
      <option value={"vivo"}>Vivo</option>
      <option value={"oppo"}>Oppo</option>
       </select></strong> </div>

       <div style={{"margin":"5px"}} className='filterProp'> <strong>Ram : <input id='Ram' onChange={(e)=>setRam(e.target.value)} type='number' /></strong> </div>
       <div style={{"margin":"5px"}} className='filterProp'> <strong>Storage : <input id='storage' onChange={(e)=>setStorage(e.target.value)} type='number' /></strong> </div>
       <div className='filterHedingBox'>
<a id='applyFilter' onClick={handleApply}><strong>Apply</strong></a>
    </div>
   </div>
</div>
</div>
          {/* FILTERS */}

{
  recents.length >0 &&  
<>   <div style={{"marginLeft":"10px"}}> <h1>Recents : </h1> </div>
  <div style={{"width":"100%","display":"flex","justifyContent":"center"}}>


      <div className='recentBox' >
      {
        recents.map((item)=>{
          return <Recentitem _id={item.product} img={item.img}  price={item.price} model={item.name} />
        })
      }
       
    </div>
    </div> </>
}
<div className="itemBox" id="itemBoxId">  
{waiting ? <><ItemStructure /> <ItemStructure /> <ItemStructure /> <ItemStructure /> <ItemStructure /> <ItemStructure /> </>  :

 stateData.length >0 ? stateData.map((element) => {
        return  <Item price={element.price} _id={element._id} product_id={element._id} name={element.company +" " +element.name} key={element._id} img={element.img} /> 
     })  : console.log() 

}
 </div>

    </>
  )
}
