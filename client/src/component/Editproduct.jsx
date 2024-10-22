import React , { useContext, useEffect, useState,  } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Foot from './Foot';
import { useParams } from 'react-router-dom';
const Editproduct = () => {
    const url = "http://localhost:4000/api";
  const {id} =useParams()
  console.log(id)
  const [title, setTitle]= useState("");
  const [description, setDescription]= useState("");
  const [qty, setQty]= useState("");
  const [price, setPrice]= useState("");
  const [image, setImage]= useState("");
  const [category, setCategory]= useState("");
  useEffect(() =>{
    const fetchProduct = async()=> {
        const old = await axios.get(`${url}/product/${id}`)
        console.log(old.data.product)
        setTitle(old.data.product.title)
        setDescription(old.data.product.description)
        setQty(old.data.product.qty)
        setPrice(old.data.product.price)
        setImage(old.data.product.image)
        setCategory(old.data.product.category)
    }
    fetchProduct()
  },[]
)
const navigate = useNavigate()
const formHandler = async (e) => {
  e.preventDefault();
  console.log("Form submit with:", {title,description,price,category,qty,image} )

  try{
    const result = await axios.put(`${url}/product/${id}`,
      {title,description,price,category,qty,image}
    );
    console.log("user successfully edit",result);
navigate('/Admin')
window.location.reload()
  }catch(err){
    console.error("error during registration:",err)
  }
  }
;


  return (
    <>
       
<div class="container">
    
    <div class="row justify-content-center">
        <div style={{alignContent:"center"}} class="col-4">
            <img style={{height:"400px", marginLeft:"180px"}} src='https://i.pinimg.com/originals/39/b7/65/39b765507ced2209e611b874d6c9e805.gif'></img>
        </div>
        <div class="col-md-8">
          <h2 class="text-center mt-5"><u>EDIT PRODUCT</u></h2>
           <p class="text-center mt-3">Please Enter Product  Details</p>
           <form onSubmit={formHandler} style={{justifyContent:"center", alignItems:"center", display:"grid"}}>
  <div class="mb-3  mt-4 ">
    <label style={{color:"grey"}} for="exampleInputEmail1" class="form-label">Title</label>
    <input  type="text" style={{width:"600px"}} class="form-control" id="exampleInputEmail1"  value={title}  onChange={(e)=> setTitle(e.target.value)} placeholder='Title' aria-describedby="emailHelp"></input>
    
  </div>
  <div class="mb-3" >
    <label style={{color:"grey"}} for="exampleInputPassword1" class="form-label">Description</label>
   <center> <input type="text" value={description}  onChange={(e)=> setDescription(e.target.value)}  style={{width:"600px"}} class="form-control " placeholder='Description' id="exampleInputPassword1"></input></center>
  </div>
  <div class="mb-3" >
    <label style={{color:"grey"}} for="exampleInputPassword1" class="form-label">Quantity</label>
   <center> <input  type="number" value={qty} onChange={(e)=> setQty(e.target.value)} style={{width:"600px"}} class="form-control " placeholder='Quantity' id="exampleInputPassword1"></input></center>
  </div>
  <div class="mb-3" >
    <label style={{color:"grey"}} for="exampleInputPassword1" class="form-label">Price</label>
   <center> <input type="number" value={price} onChange={(e)=> setPrice(e.target.value)} style={{width:"600px"}} class="form-control " placeholder='Price' id="exampleInputPassword1"></input></center>
  </div>
  <div class="mb-3" >
    <label style={{color:"grey"}} for="exampleInputPassword1" class="form-label">Add Image</label>
   <center> <input  type="text" value={image}  onChange={(e)=> setImage(e.target.value)}style={{width:"600px"}} class="form-control " placeholder='Add Image' id="exampleInputPassword1"></input></center>
  </div>
  <div class="mb-3" >
    <label style={{color:"grey"}} for="exampleInputPassword1" class="form-label">Category</label>
   <center> <input  type="text"  value={category} onChange={(e)=> setCategory(e.target.value)} style={{width:"600px"}} class="form-control " placeholder='Category' id="exampleInputPassword1"></input></center>
  </div>
  
 

<div style={{alignContent:"center"}} class="mb-3 mt-3">
  <button  style={{width:"600px" , height:"50px"}}class="btn btn-mycolors " type="submit">Edit Product</button>
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

export default Editproduct