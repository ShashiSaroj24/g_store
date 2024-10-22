import React, { useContext, useState,  } from 'react'
import Navbar from '../Navbar'
import Foot from '../Foot'
import AppContext from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName]= useState("");
  
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const navigate = useNavigate()
  const{register} = useContext(AppContext);

  const formHandler = async(e)=> {
    e.preventDefault();
    console.log({name, email, password})



    try {

    const result = await register(name, email, password)
      console.log("user register successfully", result)
      console.log(result.success)
      if (result.success){
        navigate('/login')
      }
    }
    catch(error){
      console.error("register error", error)
    }
  };


  return (
   /* function App() {
  // State to manage checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Handler to toggle checkbox state
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };*/

    <>
    


<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-4">
            <h2 class="text-center mt-5"><u>Create Account</u></h2>
           <p class="text-center mt-3">Please register account detail</p>
           <form onSubmit={formHandler} style={{justifyContent:"center", alignItems:"center", display:"grid"}}>
  <div class="mb-3  mt-4 ">
    <label style={{color:"grey"}} for="exampleInputEmail1" class="form-label">First Name</label>
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} style={{width:"600px"}} class="form-control" id="exampleInputEmail11" placeholder='First Name' aria-describedby="emailHelp"></input>
    
  </div>
 
  <div class="mb-3   ">
    <label style={{color:"grey"}} for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email"   value={email} onChange={(e)=> setEmail(e.target.value)}style={{width:"600px"}} class="form-control" id="exampleInputEmail3" placeholder='Email' aria-describedby="emailHelp"></input>
    
  </div>
  <div class="mb-3" >
    <label style={{color:"grey"}} for="exampleInputPassword1" class="form-label">Password</label>
   <center> <input  value={password} onChange={(e)=> setPassword(e.target.value)} type="password" style={{width:"600px"}} class="form-control " placeholder='Password' id="exampleInputPassword2"></input></center>
  </div>
  <div class="mb-3 ">
  
  <input type="checkbox"   id="exampleInputEmail1"  aria-describedby="emailHelp"></input>
  <label>I have read and agree with the <a href="#" class="link-secondary"> term and conditions</a></label>
 
  </div>
  <div class="mb-3 ">
  
  <button  style={{width:"130px" , color:"#ffc107", backgroundColor:" #050a30"}}class="btn " type="submit">CREATE </button>
  
    
  </div>
  <div class="mb-3 mt-3">
  <button type="submit" style={{width:"600px", height:"80px", backgroundColor:" #050a30"}} class="btn btn-primary">Already have account?
  <a href="/Login" class="link-secondary"> Log in</a></button>
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

export default Register