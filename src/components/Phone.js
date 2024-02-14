import React, { useEffect, useState } from 'react'
import Review from './Review'
import starFill from './star-fill.svg'
import star from './star.svg'
import starHalf from './star-half.svg'
import add from './plus-circle-fill.svg'
import AddReview from './AddReview'
import { useParams } from 'react-router-dom'
import Item from './Item'
import fillStar from './star-fill.svg'
import send from './send.svg'
import {useNavigate} from 'react-router-dom'

export default function Phone(){
const [thisObj,setThisObj]=useState(0);
const navigate = useNavigate()
const [reviews,setReviews]=useState([]);
const [recents,setRects]=useState(["hello"])
const [one,setOne]=useState(0)
const [isReviewSent,setIsReviewSent]=useState('false');
const [reviewAvalible,setReviewAvalible]=useState(false);

  let {id} = useParams()
   const getData = async()=>{
   let result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/product/getproduct/${id}`);
   result =await result.json();
   setThisObj(result)
   }
const addToRecent = async()=>{
  if(one===0 && thisObj !==0){
    setOne(1)
      let user = localStorage.getItem('user');
      if(user){
        user = JSON.parse(user);
        let result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/product/addrecent/${thisObj._id}`,{
          method:"post",
          body:JSON.stringify({name:thisObj.name,price:thisObj.price,img:thisObj.img}),
          headers:{
            "content-type":"application/json",
            user:user.user
          }
        })
        result = await result.json();
        getData()
        getReview()
      } }
     }
     
   const getReview = async()=>{
    let user = localStorage.getItem('user');
    user = await JSON.parse(user)
    let result =  await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/review/findreview/${thisObj._id}`);
    result =await result.json();
    if(user){
      result.map((item)=>{
        if(item.user === user.email){
          result.unshift(item);
        }
      })
    }
    setReviews(result);
   }
   useEffect(()=>{
   	getData()
    getReview()
addToRecent()
   },[])
 const [reviewEnable,setReviewEnable]=useState(0)

  const addReview =() => {
     if(reviewEnable===0){
      document.getElementById("rx").style.display='block';
    document.getElementById("addReviewButton").style.transform='rotate(45deg)';
    setReviewEnable(1)
  }
  else{
    document.getElementById("addReviewButton").style.transform='rotate(90deg)';
    document.getElementById("rx").style.display='none';
    setReviewEnable(0)
  }
}

     

   let reviewObj= [
    {
        "from":"sidhuPardeep618",
        "rate":"4",
        "dis":"this a demo rewview"
    },
    {
        "from":"sidhuPardeep613",
        "rate":"3",
        "dis":"this reting will not be count in total rating"
    },
    {
        "from":"sidhuPardeep615",
        "rate":"2",
        "dis":"profile picture not avalible due to some issues"
    },
    
    {
        "from":"sidhuPardeep616",
        "rate":"3",
        "dis":"i hope you like first projuct"
    },
    {
        "from":"sidhuPardeep617",
        "rate":"2",
        "dis":"A Project for learning purpose" }
];



//  add review

 const [body,setBody]=useState("");
  let reviewValue;
  const [starCount,setStarCount]=useState(0);


const [firstVal,setFirstVal]=useState(0)
const [secondVal,setSecondVal]=useState(0)
const [thirdVal,setThirdVal]=useState(0)
const [forthVal,setForthVal]=useState(0)
const [fifthVal,setFifthVal]=useState(0)


  const reviewSent =async () => {
    let user = localStorage.getItem('user');
    if(!user){
  navigate("/signup")
    }
    else{
      user = JSON.parse(user);
      let result = await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/review/addReview/${thisObj._id}`,{
        method:"post",
        body:JSON.stringify({body:body,rate:starCount}),
        headers:{
          "content-type":"application/json",
          user:user.user
        }
      })
      result = await result.json();
      if(result.result ==="avalible"){
        setReviewAvalible(true);
         setDisplay({"display":"flex"})
      }
    reviewValue=document.getElementById("reviewArea").value;
    document.getElementById('reviewArea').style.display='none';
    document.getElementById('sendLogo').style.display="none";
}

  }

const [display,setDisplay]=useState({"display":"flex"})
      const hide= ()=>{
        setDisplay({"display":"none"})
        
    }

  const firstFunc = () => {
    if(firstVal ===0){
    document.getElementById('first').src=fillStar;
    setFirstVal(1)
    setSecondVal(0)
    setThirdVal(0)
    setForthVal(0)
    setFifthVal(0)
      setStarCount(1)
      document.getElementById('reviewArea').style.display='flex';
      document.getElementById('sendLogo').style.display="block";
  }
    else{
         document.getElementById("first").src=star;
      document.getElementById("second").src=star;
      document.getElementById("third").src=star;
      document.getElementById("forth").src=star;
      document.getElementById("fifth").src=star;
     setFirstVal(0)
    setSecondVal(0)
    setThirdVal(0)
    setForthVal(0)
    setFifthVal(0)
       setStarCount(0);
      document.getElementById('reviewArea').style.display='none';
      document.getElementById('sendLogo').style.display="none";
    }
  }
  
  const secondFunc = () => {
    if(secondVal ===0){
    document.getElementById('first').src=fillStar;
    document.getElementById('second').src=fillStar;
      setFirstVal(1)
    setSecondVal(1)
    setThirdVal(0)
    setForthVal(0)
    setFifthVal(0)
    setStarCount(2)
      document.getElementById('reviewArea').style.display='flex';
      document.getElementById('sendLogo').style.display="block";
  }
    else{
         document.getElementById("second").src=star;
      document.getElementById("third").src=star;
      document.getElementById("forth").src=star;
      document.getElementById("fifth").src=star;
    setSecondVal(0)
    setThirdVal(0)
    setForthVal(0)
    setFifthVal(0)
     setStarCount(1)
    }
  }
  
  const thirdFunc = () => {
    if(thirdVal ===0){
    document.getElementById('first').src=fillStar;
    document.getElementById('second').src=fillStar;
      document.getElementById('third').src=fillStar;
     setFirstVal(1)
    setSecondVal(1)
    setThirdVal(1)
    setForthVal(0)
    setFifthVal(0)
   setStarCount(3)
      document.getElementById('reviewArea').style.display='flex';
      document.getElementById('sendLogo').style.display="block";
  }
    else{
      document.getElementById("third").src=star;
      document.getElementById("forth").src=star;
      document.getElementById("fifth").src=star;
    setThirdVal(0)
    setForthVal(0)
    setFifthVal(0)
   setStarCount(2)
    }
  }
  
  const forthFunc = () => {
    if(forthVal ===0){
    document.getElementById('first').src=fillStar;
    document.getElementById('second').src=fillStar;
      document.getElementById('third').src=fillStar;
      document.getElementById('forth').src=fillStar;
      document.getElementById('reviewArea').style.display='flex';
      document.getElementById('sendLogo').style.display="block";
     setFirstVal(1)
    setSecondVal(1)
    setThirdVal(1)
    setForthVal(1)
    setFifthVal(0)
      setStarCount(4)  }
    else{
      document.getElementById("forth").src=star;
      document.getElementById("fifth").src=star;
    setForthVal(0)
    setFifthVal(0)
  setStarCount(3)
    }
  }
  
  const fifthFunc = () => {
    if(fifthVal ===0){
    document.getElementById('first').src=fillStar;
    document.getElementById('second').src=fillStar;
      document.getElementById('third').src=fillStar;
      document.getElementById('forth').src=fillStar;
      document.getElementById('fifth').src=fillStar;
      document.getElementById('reviewArea').style.display='flex';
      document.getElementById('sendLogo').style.display="block";
    setFirstVal(1)
    setSecondVal(1)
    setThirdVal(1)
    setForthVal(1)
    setFifthVal(1)
      setStarCount(5)
  }
    else{
      document.getElementById("fifth").src=star;
    setFifthVal(0)
       setStarCount(4)
    }
  }

	return(
<>
  <div id="productBox"  >
  
      <Item price={thisObj.price} _id={thisObj._id} product_id={thisObj._id} name={thisObj.company +" " +thisObj.name} key={thisObj._id} img={thisObj.img} /> 
   
    <div id='productDetailsBox'>
      <div id='pdhb'><h2 className='hedBlack' style={{margin:'50px'}}> About Product</h2></div>
      <div id='productDetailsInnerBox'>  <p>product Name : {thisObj.company+" "+ thisObj.name}</p>
        <p>Product Price : &#8377; {thisObj.price}/-</p>
        <p>Company : {thisObj.company} </p> </div>
    </div>
   </div>
   <div id='productDescripitionAndReviewBox'>
    <div id='productDescripitionBox'> 
    <div id='discriptionHeadingBox'><center><h2 className='hedBlack' >Description</h2></center></div>
   <div id='disBox'>
    <p>Company : {thisObj.company}</p> 
    <p>Front Camera : {thisObj.front} MP</p> 
    <p>Rear Camera : {thisObj.rear} MP</p> 
    <p>Storage : {thisObj.storage} GB</p> 
    <p>Ram : {thisObj.ram} GB</p> 
    <p>Battery Capacity : {thisObj.battery} MAH</p> 
    <p>Network : {thisObj.network} G</p> 
    <p>Architecher : {thisObj.arch} Bit</p> 
               </div>
     </div>

    <div id='productReviewBox'  > 
        <h2 className='hedBlack'>Reviews 
        <img style={{"marginLeft" :"5px"}} src={starFill} alt="no" /> 
        <img style={{"marginLeft" :"5px"}}  src={starFill} alt="no" />
        <img style={{"marginLeft" :"5px"}} src={starHalf} alt="no" />
        <img style={{"marginLeft" :"5px"}} src={star} alt="no" />
        <img src={star} style={{"margin-right" :"5px","marginLeft" :"5px"}} alt="no" />       
        <img src={add} id='addReviewButton' onClick={addReview}/> </h2>
  
        <div id='rx' style={{display : "none"}}>
 <div id='rateMainBox'>
    <div id='rateBox' >
      <h4 className='hedBlack' style={{marginTop : '10px',}}>Rate </h4>
    <div id='addReviewStarsBox'>
      <img src={star} id='first' onClick={firstFunc} alt=' '/>
      <img src={star} id='second' onClick={secondFunc} alt=' '/>
      <img src={star} id='third' onClick={thirdFunc} alt=' '/>
      <img src={star} id='forth' onClick={forthFunc} alt=' '/>
      <img src={star} id='fifth' onClick={fifthFunc} alt=' '/>
      </div>
    </div>
    <textarea type='text-area' value={body} onChange={(e)=>{setBody(e.target.value)}} cols={30} id='reviewArea'/>
      <img id='sendLogo' src={send}  onClick={reviewSent}/>
    
    </div>
         </div>
        <div id='reviewInnerBox'>
       {  reviews.length > 0 && reviews.map((Element)=>{
        return <Review from={Element.user} key={Element._id} rate={Element.rate} dis={Element.body} />
       }) }

        { reviewObj.map((Element)=>{
         return <Review from={Element.from} key={Element.from} rate={Element.rate} dis={Element.dis} />
        })}
        
        
        </div>
       
    </div> 
   </div>   
   {reviewAvalible && <div style={display} className='alert' id='v'>
    <div className='alertBox' id="alertx">
    <h2 style={{"position":"relative","top":"18px"}} >Already Sent</h2>
    <button onClick={hide} style={{"textShadow": "1px 1px 2px black,-1px -1px 2px black","marginTop":"30px"}} className="btnBoxes" >OK</button>
    </div>
    </div> }
</>
	)
}