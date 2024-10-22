import React , {useState, useContext} from 'react'
import Foot from './Foot'
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Address = () => {
  const [fullName, setFullName]= useState(" ");
  const [address, setAddress]= useState(" ");
  const  [ city, setCity]= useState(" ");
  const  [ state, setState]= useState(" ");
  const  [ country, setCountry]= useState(" ");
  const  [ pincode, setPincode]= useState(" ");
  const  [ phoneNumber, setPhoneNumber]= useState(" ");
  const{shippingAddress,userAddress } = useContext(AppContext);
  const navigate = useNavigate()
 console.log("shipping address page", userAddress)
  const formHandler = async(e)=> {
    e.preventDefault();
    console.log({fullName,address , city,state,country,pincode, phoneNumber, })

   
  
  try {

    const result = await shippingAddress( fullName,address , city,state,country,pincode, phoneNumber,)
      console.log(" successfully", result)
      console.log("aaa",result.success)
      if (result.success){
        navigate('/Checkout')
        
      }
    }
    catch(error){
      console.error("login error", error)
    }
  };

  
  return (
    <>
    


    

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5">
            <h2 class="text-center mt-5"><u>Shipping Address </u></h2>
            <form  onSubmit={formHandler} class="row g-3 pt-4">
  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Full Name</label>
    <input value={fullName} onChange={(e)=> setFullName(e.target.value)} type="text" class="form-control" id="inputEmail4"></input>
  </div>

  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input value={address} onChange={(e)=> setAddress(e.target.value)} type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
  <div class="col-12">
    
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input value={city} onChange={(e)=> setCity(e.target.value)} type="text" class="form-control" id="inputCity"></input>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <input value={state} onChange={(e)=> setState(e.target.value)} type="text" class="form-control" id="inputCity"></input>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Pin Code</label>
    <input value={pincode} onChange={(e)=> setPincode(e.target.value)} type="text" class="form-control" id="inputZip"></input>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Country</label>
    <input value={country} onChange={(e)=> setCountry(e.target.value)} type="text" class="form-control" id="inputCity"></input>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Contact</label>
    <input value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} type="number" class="form-control" id="inputCity"></input>
  </div>
 
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button style={{width:"530px", backgroundColor:" #050a30"}} type="submit" class="btn btn-primary">Submit</button>
  </div>
</form><br></br>
{userAddress && <div class="col-12">
    <button style={{width:"530px", backgroundColor:" #050a30"}} onClick={()=> navigate('/Checkout')} type="submit" class="btn btn-primary">Use Old Address</button>
  </div>



}
               
            </div>
        </div>
    </div>
    <br></br>
    
    
    <Foot/>
    
        </>
  )
}

export default Address