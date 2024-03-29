import React , {useEffect, useState} from 'react'
import Item from './Item'
import searchSvg from './search.svg'
import {
  BrowserRouter as Router ,
  Routes,
  Route,
 Link
} from 'react-router-dom';


export default function Navbar(props) {
 
const [search,setSearch]=useState("");
// const getColor =()=>{
//   let color =localStorage.getItem('color')
//   if(color){
//     color = JSON.parse(color)
//      var r = document.querySelector(':root');
//   r.style.setProperty('--bCol',color);
//   }
// }


function changeColor(){
  let color = document.getElementById("colorSearch").value;
  var r = document.querySelector(':root');
  r.style.setProperty('--bCol', color);
}
 function handleColorBtn(){
 let btn = document.getElementById("theme").innerHTML;
  if(btn==="Color"){
  document.getElementById("theme").innerHTML="hide";
  document.getElementById("colorSearch").style.display="block";
 }
 else{
  document.getElementById("theme").innerHTML="Color";
  document.getElementById("colorSearch").style.display="none";
 }
}
const [pText,SetPText]=useState("");
useEffect(()=>{
  let login = localStorage.getItem("user");
  if(login){
SetPText("Profile");
  }
  else{
    SetPText("SignUp");
  }
})
  return (
    <>
    
    <div className='container' id='navBar'>
  <nav className='navBar'>

  <div className='navBtn'>
  <div className='btnBoxes'>
    <Link to={"/"+pText}>{pText}</Link>
    </div>
    <div className='btnBoxes'>
    <Link to='/'>Home</Link>
    </div>
    <div className='btnBoxes'>
    <Link to='/orders'>Orders</Link>
    </div>
    <div className='btnBoxes'>
    <Link to='/about'>About</Link>
    </div>
    
     </div>
     <div className='navBtn'>
    
      <input type='text' onChange={(e)=>props.handleSearchValue(e.target.value)} className='search' placeholder='Search Here...'/> 
     </div>
  </nav>
 
  </div>
<div className="floatingCartBox"> <Link className="flotingCartButton" to='/cart'><svg  xmlns="http://www.w3.org/2000/svg" width="60" height="70" fill="black" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
</svg> </Link></div>

    </>
  );
 
  }

