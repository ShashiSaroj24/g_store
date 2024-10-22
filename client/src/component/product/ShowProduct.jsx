import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Navbar from '../Navbar';
import Foot from '../Foot';
import { Link } from 'react-router-dom';


const ShowProduct = () => {
  const {products, filteredData, addToCart} = useContext(AppContext); // Use the context directly
console.log(filteredData)
  return (
    <>
  

       
      <div class="container">
      <div className='row'>
       
      {filteredData?.map((i) =>(
      
          
          
    <div className='col-4'  key={i._id}>
    <div className="card text-center " style={{width:"402px",height:"330px" ,marginLeft:"", marginTop:"80px"}}>
  <div className="card-body card-mycolors">
   <Link to={`/product/${i._id}`}> <img style={{height:"170px"}} src={i.image}  /></Link>
    <p style={{paddingTop:"40px", color:"gray", fontSize:"20px"}} className="card-text">{i.title} </p>
    <button  class="btn btn-mycolor" onClick={() => addToCart(i._id,i.title,i.price,1,i.image)}>Add To Cart</button>  &emsp;
    <button  style={{width:"130px" }}class="btn btn-mycolors " type="button">Rs. {i.price}</button>
    
    
  </div>
</div>
    </div>
    
         

      

      ) )}
      </div>
      </div>
      <br></br>
      <br></br>


       <Foot /> 
    </>
  );
};

export default ShowProduct;
