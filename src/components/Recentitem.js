import React from 'react'

export default function Recentitem(props) {

  return (
    <div  className='recentOuterBox'>
          <a href={"/product/"+props._id} style={{"textDecoration":"none"}} className='recentInnerBox'>
            <div  className='recentImageBox'> 
           <img style={{"width":"107.5px","height":"73px"}} src={props.img} />
            </div>
            
      <div className='recentNameBox'>
        <h6 >{props.price}/-</h6>
      </div>
      <div className='recentNameBox'>
        <h6 >{props.model}</h6>
      </div>

      </a>
    </div>
  )
}
