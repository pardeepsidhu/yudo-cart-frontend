import React ,{useState} from 'react'
import star from './star.svg'
import fillStar from './star-fill.svg'
import send from './send.svg'
export default function AddReview() {
  const [body,setBody]=useState("");
  let reviewValue;
  let starCount=0;
  let firstVal=0;
  let secondVal=0;
  let thirdVal=0;
  let forthVal=0;
  let fifthVal=0;
  const reviewSent = () => {
    reviewValue=document.getElementById("reviewArea").value;
    
    document.getElementById('reviewArea').style.display='none';
    document.getElementById('sendLogo').style.display="none";

  }
  const firstFunc = () => {
    if(firstVal ===0){
    document.getElementById('first').src=fillStar;
      firstVal=1;
      secondVal=0;
      thirdVal=0;
      forthVal=0;
      fifthVal=0;
      starCount=1;
      document.getElementById('reviewArea').style.display='flex';
      document.getElementById('sendLogo').style.display="block";
  }
    else{
         document.getElementById("first").src=star;
      document.getElementById("second").src=star;
      document.getElementById("third").src=star;
      document.getElementById("forth").src=star;
      document.getElementById("fifth").src=star;
      firstVal=0;
      secondVal=0;
      thirdVal=0;
      forthVal=0;
      fifthVal=0;
      starCount=0;
      document.getElementById('reviewArea').style.display='none';
      document.getElementById('sendLogo').style.display="none";
    }
  }
  
  const secondFunc = () => {
    if(secondVal ===0){
    document.getElementById('first').src=fillStar;
    document.getElementById('second').src=fillStar;
      firstVal=1;
      secondVal=1;
      thirdVal=0;
      forthVal=0;
      fifthVal=0;
      starCount=2;
      document.getElementById('reviewArea').style.display='flex';
      document.getElementById('sendLogo').style.display="block";
  }
    else{
         document.getElementById("second").src=star;
      document.getElementById("third").src=star;
      document.getElementById("forth").src=star;
      document.getElementById("fifth").src=star;
      secondVal=0;
      thirdVal=0;
      forthVal=0;
      fifthVal=0;
      starCount=1;
    }
  }
  
  const thirdFunc = () => {
    if(thirdVal ===0){
    document.getElementById('first').src=fillStar;
    document.getElementById('second').src=fillStar;
      document.getElementById('third').src=fillStar;
      firstVal=1;
      secondVal=1;
      thirdVal=1;
      forthVal=0;
      fifthVal=0;
      starCount=3;
      document.getElementById('reviewArea').style.display='flex';
      document.getElementById('sendLogo').style.display="block";
  }
    else{
      document.getElementById("third").src=star;
      document.getElementById("forth").src=star;
      document.getElementById("fifth").src=star;
      thirdVal=0;
      forthVal=0;
      fifthVal=0;
      starCount=2;
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
      firstVal=1;
      secondVal=1;
      thirdVal=1;
      forthVal=1;
      fifthVal=0;
      starCount=4;
  }
    else{
      document.getElementById("forth").src=star;
      document.getElementById("fifth").src=star;
      forthVal=0;
      fifthVal=0;
      starCount=3;
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
      firstVal=1;
      secondVal=1;
      thirdVal=1;
      forthVal=1;
      fifthVal=1;
      starCount=5;
  }
    else{
      document.getElementById("fifth").src=star;
      fifthVal=0;
      starCount=4;
    }
  }
  return (
    
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
   
  )
}
