import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext';
import {  useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cart, decreaseQTY,addToCart,removeFromCart,ClearCart, } = useContext(AppContext);
  const [Q,setQ] = useState(0)
  const navigate = useNavigate()
  const [p,setp] = useState(0)
  useEffect(()=>{
    let Q = 0;
    let p =0;
    if (cart?.items){
      for (let i=0; i < cart.items?.length; i++){
        Q += cart.items[i].qty;
        p += cart.items[i].price;
      }
    }
    setp(p);
    setQ(Q)
  },[cart]);
  return (
    <>
    {cart?.items?.length == 0 ?(
      <>
      <div className='text-centre my-5'>
      <button  style={{width:"200px", marginLeft:"600px"}} onClick={() => navigate("/")} class="btn btn-mycolorss " type="button">Continue Shopping...</button>
      </div>
      </>
    ):(
    <div className='col pt-4 '>
    <button  style={{width:"150px",marginLeft:"100px" }}class="btn btn-mycolor " type="button">Total QTY:-{Q} </button>
    <button  style={{width:"200px", marginLeft:"950px"}}class="btn btn-mycolorss " type="button">Total Price:-{p}</button>
    </div>
    )}
     {cart?.items?.map((i) =>(


    <div className='container'  key={i._id}>
      <div className='row border shadow p-4 mt-4'>
        <div className='col-md-4'><img style={{height:"180px", textAlign:"center"}} src={i.img}></img></div>
        <div className='col-md-4'> <p style={{paddingTop:"px", color:"gray", fontSize:"20px"}} className="card-text">{i.title} </p>
      <p style={{fontSize:"20px"}}> Rs {i.price}</p><p style={{paddingTop:"", color:"gray", fontSize:"20px"}} className="card-text">  Quantity:-  {i.qty} </p></div>
        <div className='col-md-4'><button  style={{width:"130px", }}   onClick={() => addToCart(i.productId,i.title,i.price,1,i.image)} class="btn btn-mycolor " type="button">QTY++</button>
        <button  style={{width:"130px", marginLeft:"20px"}} onClick={()=>decreaseQTY(i?.productId,1)} class="btn btn-mycolorss " type="button">QTY--</button>
        <button  style={{width:"130px", marginTop:"20px" ,marginLeft:"80px" }} onClick={() =>{
          if (confirm("Are you sure, you want remove from cart")){
            removeFromCart(i?.productId)
          }
        }} class="btn btn-danger " type="button">REMOVE {""}</button></div>
      </div>
      </div>
      
      
      

    
    
        ) )}
        {cart?.items?.length > 0 &&(
           
       <div className='col pt-4 '>
       <button  style={{width:"150px",marginLeft:"100px", marginBottom:"50px" }}class="btn btn-mycolor "  onClick={()=> navigate('/Address')} type="button">CheckOut </button>
       <button  style={{width:"200px", marginLeft:"950px", marginBottom:"50px"}}   onClick={() =>{
          if (confirm("Are you sure, you want clear  cart...?")){
            ClearCart();
          }
        }}class="btn btn-mycolorss " type="button">ClearCart</button>
       </div>
        )}
    </>
  )
}


export default Cart