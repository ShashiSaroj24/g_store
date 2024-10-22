import React, { useContext, useState,  }from 'react'
import Navbar from '../Navbar';
import Foot from '../Foot';
import AppContext from '../../context/AppContext';

const AddProduct = () => {

  const [title, setTitle]= useState("");
  const [description, setDescription]= useState("");
  const [qty, setQty]= useState("");
  const [price, setPrice]= useState("");
  const [image, setImage]= useState("");
  const [category, setCategory]= useState("");
  const{AddProduct} = useContext(AppContext);
  const formHandler = async(e)=> {
    e.preventDefault();
    console.log({title,description,qty,price,image,category})

    try {

      const result = await AddProduct(title,description,qty,price,image,category)
        console.log("user add product  successfully", result)
        console.log(result.success)
        
      }
      catch(error){
        console.error("product  error", error)
      }
    };
  
  return (
    <>
    
    
<div class="container">
    
    <div class="row justify-content-center">
        <div style={{alignContent:"center"}} class="col-4">
            <img style={{height:"400px", marginLeft:"180px"}} src='https://i.pinimg.com/originals/39/b7/65/39b765507ced2209e611b874d6c9e805.gif'></img>
        </div>
        <div class="col-md-8">
          <h2 class="text-center mt-5"><u>ADD PRODUCT</u></h2>
           <p class="text-center mt-3">Please Enter Product  Details</p>
           <form onSubmit={formHandler} style={{justifyContent:"center", alignItems:"center", display:"grid"}}>
  <div class="mb-3  mt-4 ">
    <label style={{color:"grey"}} for="exampleInputEmail1" class="form-label">Title</label>
    <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" style={{width:"600px"}} class="form-control" id="exampleInputEmail1" placeholder='Title' aria-describedby="emailHelp"></input>
    
  </div>
  <div class="mb-3" >
    <label style={{color:"grey"}} for="exampleInputPassword1" class="form-label">Description</label>
   <center> <input value={description} onChange={(e)=> setDescription(e.target.value)} type="text" style={{width:"600px"}} class="form-control " placeholder='Description' id="exampleInputPassword1"></input></center>
  </div>
  <div class="mb-3" >
    <label style={{color:"grey"}} for="exampleInputPassword1" class="form-label">Quantity</label>
   <center> <input value={qty} onChange={(e)=> setQty(e.target.value)} type="number" style={{width:"600px"}} class="form-control " placeholder='Quantity' id="exampleInputPassword1"></input></center>
  </div>
  <div class="mb-3" >
    <label style={{color:"grey"}} for="exampleInputPassword1" class="form-label">Price</label>
   <center> <input value={price} onChange={(e)=> setPrice(e.target.value)} type="number" style={{width:"600px"}} class="form-control " placeholder='Price' id="exampleInputPassword1"></input></center>
  </div>
  <div class="mb-3" >
    <label style={{color:"grey"}} for="exampleInputPassword1" class="form-label">Add Image</label>
   <center> <input value={image} onChange={(e)=> setImage(e.target.value)} type="text" style={{width:"600px"}} class="form-control " placeholder='Add Image' id="exampleInputPassword1"></input></center>
  </div>
  <div class="mb-3" >
    <label style={{color:"grey"}} for="exampleInputPassword1" class="form-label">Category</label>
   <center> <input value={category} onChange={(e)=> setCategory(e.target.value)} type="text" style={{width:"600px"}} class="form-control " placeholder='Category' id="exampleInputPassword1"></input></center>
  </div>
  
 

<div style={{alignContent:"center"}} class="mb-3 mt-3">
  <button  style={{width:"600px" , height:"50px"}}class="btn btn-mycolors " type="submit">Add Product</button>
  </div>
  </form>
        </div>
    </div>
    
</div>
<br></br>
      
      <Foot />
    </>
  )
}

export default AddProduct