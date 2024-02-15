import React,{useEffect,useState} from 'react'
import star from './star.svg'
import starFill from './star-fill.svg'
import starHalf from './star-half.svg'
import demoProfile from './demoProfile.png'


export default function Review(props) {
 const [star2,setStar2]=useState(star)
  const [star3,setStar3]=useState(star)
   const [star4,setStar4]=useState(star)
    const [star5,setStar5]=useState(star)
    const init =()=>{
  switch(props.rate){
    case 5: setStar2(starFill);  setStar3(starFill); setStar4(starFill); setStar5(starFill);  
    break;
    case 4:setStar2(starFill);  setStar3(starFill); setStar4(starFill); setStar5(star); 
    break;
    case 3: setStar2(starFill);  setStar3(starFill); setStar4(star); setStar5(star);  
    break;
    case 2: setStar2(starFill);  setStar3(star); setStar4(star); setStar5(star);   
    break;
  } }
useEffect(()=>{
  init()
})
  return (
    <>
    <div id='review'>
      <button id='reviewImageBox'> 
      <img id='reviewPhoto'src={demoProfile} />
      </button> 
       <h6 className='hedBlack' style={{"text-shadow":"1px 1px 4px black, -1px -1px 4px black"}}> {props.from}</h6> 
       <div id='stars' >
        <img src={starFill} alt="no" /> <img  src={star2} alt="no" /> <img src={star3}  alt="no" />  <img src={star4}  alt="no" />   <img src={star5}  alt="no" /> 
           </div>
     
    </div>
    <div className='writtenReview' >
      <p>{props.dis}</p>
    </div>
    </>
  )
}
