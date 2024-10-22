import React, { useContext, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Navbar = () => {
  const [searchTerm, setSearchTerm]= useState("");

  const {products , setFilterData ,  isAuthenticated, Logout,cart} = useContext(AppContext);
  const navigate = useNavigate();
  const submitHandler = (e) =>{
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm("")
  }

const filterbyCategory = (cat) => {
  // cat.preventDefault();
  navigate(`/`);
  // setSearchTerm("")
  console.log(cat)

  setFilterData( products.filter(   (data) => data.category.toLowerCase() ==cat.toLowerCase()
  )
)




}  

  return (  
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
    <nav >
  <div style={{backgroundColor:" #FDD835", height:"42px"}} class="container-fluid pt-2 ">
   <a  style={{ fontSize:"14px",}} class="navbar-brand   " href="/">  <span  style={{marginRight:"8px"}}> <b>STORE LOCATION </b> </span><span  style={{marginLeft:"4px"}}>| </span><b><a href='/Contactus'> <span  style={{marginLeft:"10px", color:"black"}}> Contact Us </span> </a></b><span  style={{marginLeft:"10px"}}>|</span> <span  style={{marginLeft:"10px"}}><b> (+91) 123 456 7894</b> </span>
   
   </a>
   {!isAuthenticated &&(
    <>
   <a class="navbar-brand   " href='/Login'> <span style={{marginLeft:"680px"}}><span style={{marginRight:"10px"}}> <i class="bi bi-person-circle">    Login    </i>    </span></span>
</a>
   <a class="navbar-brand   " style={{marginRight:"10px"}}  href='/Register'><i class="bi bi-r-circle">  Register  </i></a>

    </>
    )}

{isAuthenticated &&(
    <>
   
   <a class="navbar-brand   " style={{marginLeft:"800px"}}  href='/Cart'>
   <i class="bi bi-bag-check"> <button type="button" class="btn  position-relative">
  CART
  {cart?.items?.length > 0 &&(
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart?.items?.length}
    <span class="visually-hidden">unread messages</span>
  </span>
  )}
</button></i></a>
     <a class="navbar-brand   " style={{marginRight:"10px"}}  href='/Register'><i class="bi bi-person-check">  Profile </i></a>  <span  style={{marginLeft:"px"}}>| </span>  
     <span  style={{marginLeft:"5px"}}><b> 
      <i class="bi bi-box-arrow-right" style={{cursor:"pointer"}} onClick={()=>{
        Logout();
    
    navigate("/Login");}}>Logout</i></b> </span> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </>)}
  </div>

</nav>
{location.pathname =="/" &&(


<nav class="navbar border-bottom navbar-expand-lg ">
  <div style={{height:"90px", backgroundColor:""}} class="container-fluid pt-2">
    <a class="navbar-brand" href="#"><h2 style={{marginLeft:"40px"}}> <i class="bi bi-lightning-charge">Gadget Galaxy </i> </h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active"  style={{cursor:"pointer"}} onClick={() => filterbyCategory("Laptops")}  > <span style={{marginLeft:"100px"}}>Laptops</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style={{cursor:"pointer"}}  onClick={() => filterbyCategory("Tablets")} aria-current="page" > <span style={{marginLeft:"30px"}}>Tablets</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  style={{cursor:"pointer"}}  onClick={() => filterbyCategory("Headphones")} aria-current="page" > <span style={{marginLeft:"30px"}}>Headphones</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={() => setFilterData(products)} > <span style={{marginLeft:"30px"}}>Products  </span></a>
        </li>
        <span style={{marginLeft:""}}>
        <li class="nav-item">
          <a class="nav-link active"  style={{cursor:"pointer"}} onClick={() => filterbyCategory("Phones")} aria-current="page" > <span style={{marginLeft:"30px"}}>Mobile Phones</span></a>
        </li>
        </span>
        <li class="nav-item">
          <a class="nav-link  active" style={{cursor:"pointer"}} onClick={() => filterbyCategory("Cameras")} > <span style={{marginLeft:"30px"}}> Cameras</span></a>
        </li>
      </ul>
     <span style={{marginRight:"100px"}}> <form className='search_bar ' onSubmit={submitHandler} class="d-flex" role="search">
      
        <input  value={searchTerm}  onChange={(e)=> setSearchTerm(e.target.value)} type="text" class="form-control me-2"  placeholder="Search" aria-label="Search"></input>
        
      
      <span> <a href='#' class="navbar-brand "><i style={{fontSize:"30px"}} class="bi bi-search"></i></a></span></form></span>
      
    </div>
  </div>
  
</nav>
)}
    </>
  )
}

export default Navbar