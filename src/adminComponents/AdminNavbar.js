import React,{useEffect} from 'react'

export default function AdminNavbar(){
	const isAdmin = async()=>{
	 let user= localStorage.getItem('user');
	 if(user){
		user=JSON.parse(user)
		let result =await fetch(`${process.env.REACT_APP_BASE_DATA_BASE}/auth/profile`,{
		  headers:{
			user:user.user
		  }
		})
		result = await result.json()
	 	if(result.email===process.env.REACT_APP_DEVELOPER_EMAIL){
	 		document.getElementById('adminNavbar').style.display ='flex';
	 }
	 	}	
	}
	useEffect(()=>{
		isAdmin()
	},[])
	return(
<>
 <div className='container '>
  <nav className='navBar adminNavbar'  id='adminNavbar'>
  <div className='navBtn'>
  <div className='btnBoxes'>
    <a href='/addproduct'>Add</a>
    </div>
    <div className='btnBoxes'>
    <a href='/productlist'>list</a>
    </div>
    </div>
  </nav>
  </div>
</>
		)
}