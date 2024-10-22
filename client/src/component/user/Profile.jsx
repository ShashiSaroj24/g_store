import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

const Profile = () => {
  const {user} =useContext(AppContext)
  console.log(user)
  return (
    <>
    <div className='container'>
        <div className='row pt-5'>
            <div className='col-4'></div>
            <div   className='col-4  '>
                <h1 style={{textAlign:"center"}}>  Welcome {user?.name}</h1>
                <p style={{textAlign:"center", paddingTop:"10px"}}>  Welcome  {user?.email}</p>
                
            </div>
            <div className='col-4'></div>

        </div>
    </div>
   
    </>
  )
}

export default Profile