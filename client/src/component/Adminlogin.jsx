import React from 'react'
import Foot from './Foot'
const Adminlogin = () => {
  return (
    <>


    


<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-4">
            <h2 class="text-center mt-5"><u> Admin Login </u></h2>
           <p class="text-center mt-3">Please login account detail</p>
           <form  style={{justifyContent:"center", alignItems:"center", display:"grid"}}>
  <div class="mb-3  mt-4 ">
    <label style={{color:"grey"}} for="exampleInputEmail1" class="form-label">Email</label>
    <input  type="email" style={{width:"600px"}} class="form-control" id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp"></input>
    
  </div>
  <div class="mb-3" >
    <label style={{color:"grey"}} for="exampleInputPassword1" class="form-label">Password</label>
   <center> <input  type="password" style={{width:"600px"}} class="form-control " placeholder='Password' id="exampleInputPassword1"></input></center>
  </div>
  <div class="mb-3 mt-3">
  
  <button  style={{width:"130px" , color:"#ffc107", backgroundColor:" #050a30"}}class="btn " type="submit">SIGN  IN </button>
  <a href="#" style={{marginLeft:"300px"}} class="link-secondary hov ">Forgot your password?</a>

    
  </div>
  <div class="mb-3 mt-3">
  <button type="submit" style={{width:"600px", height:"80px", backgroundColor:" #050a30"}} class="btn btn-primary">Don't have account? 
  <a href="/Register
  " class="link-secondary hov"> Create account</a></button>
  </div>
</form>
        </div>
    </div>
</div>
<br></br>


<Foot/>

    </>

  )
}

export default Adminlogin