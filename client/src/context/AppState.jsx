import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';
import axios from 'axios';



import { toast, Bounce } from 'react-toastify';
const AppState = (props) => {
  const url = 'http://localhost:4000/api';
  const [products, setProducts] = useState([]);
  const [filteredData, setFilterData] = useState([]);
  const [token, setToken] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
const [user,setUser] =useState();
const [cart, setCart] = useState([])
const [userAddress, setUserAddress] =useState();


const [reload, setReload] = useState(false);
let lstoken = localStorage.getItem("token");
useEffect(() => {
if(lstoken){
  setToken(lstoken);
  setIsAuthenticated(true);
  Profile()
}
},[]);
  useEffect(() => {
 
  
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/allproduct`, {
        headers: {
          'Content-Type': 'Application/json',
        },
        withCredentials: true
      });
      console.log(api.data.alldata);
      setProducts(api.data.alldata); // Pass only the data part of the response
      setFilterData(api.data.alldata); // Pass only the data part of the response
    };

    fetchProduct();
    usedCart();
    shippingView();
    
  },[token, reload]);

  const register = async (name, email, password, )=>{
    const api = await axios.post(`${url}/user/Register`, {name, email, password},
    {
      headers:{
        'content-Type': 'Application/json'
      },
    withCredentials:true
  });
  console.log("user Register", api)
  toast('SUCCESSFULLY REGISTER', {
    position: "top-center",
    autoClose: 1800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    type:"success",
    transition: Bounce,
    });
  

  return api.data;
}

const login = async ( email, password)=>{
  const api = await axios.post(`${url}/user/login`, { email, password},
  {
    headers:{
      'content-Type': 'Application/json'
    },
  withCredentials:true
});
console.log("user Login", api)
  toast('LOGIN SUCCESSFULLY ', {
    position: "top-center",
    autoClose: 1800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    type:"success",
    transition: Bounce,
    });
    setToken(api.data.token);
    setIsAuthenticated(true);
    localStorage.setItem("token", api.data.token)
  
return api.data;
}
const AddProduct = async (title,description,qty,price,image,category)=>{
  const api = await axios.post(`${url}/product/addproduct`, {title,description,qty,price,image,category},
  {
    headers:{
      'content-Type': 'Application/json'
    },
  withCredentials:true
});
return api.data;
}
const Profile = async () => {
  
  const api = await axios.get(`${url}/user/profile`,{
    headers: {
      "Content-Type":"Application/json",
      auth:token
    },
    withCredentials: true,
  })
  console.log("res",api.data.user)
  setUser(api.data.user);
 
  
}
const addToCart = async (productId, title , price , qty, img) =>{
  console.log(" product id = ", productId);
  const api = await axios.post(
    `${url}/cart/add`,
    {productId, title , price , qty, img,},
    {
      headers:{
        "Content-Type":"Application/json",
        auth:token,
      },
      withCredentials:true,
    }
    
  )
  setReload(!reload);
  console.log("my cart", api)
}


const shippingAddress = async ( fullName,address , city,state,country,pincode, phoneNumber, ) =>{
  const api = await axios.post(
    `${url}/shipping/add`,
    {fullName,address , city,state,country,pincode, phoneNumber},
    {
      headers:{
        "Content-Type":"Application/json",
        auth:token,
      },
      withCredentials:true
    }
  )
   setReload(!reload);
  console.log( "shipping address", api)
  
  return api.data
}
const shippingView = async () => {
  
  const api = await axios.get(`${url}/shipping/view`,{
    headers: {
      "Content-Type":"Application/json",
      auth:token
    },
    withCredentials: true,
  })
  console.log("shipping View",api.data.alldata)
  setUserAddress(api.data.alldata[0]);
  
  
}
const contact = async (name,email,phone,message)=>{
  const api = await axios.post(`${url}/contact/con`, {name,email,phone,message},
  {
    headers:{
      'content-Type': 'Application/json'
    },
  withCredentials:true
});
// setReload(!reload);
return api.data;
}
const usedCart = async() => {
  const api = await axios.get(`${url}/cart/spc`,{
    headers:{
      "Content-Type":"Application/json",
      auth:token,
    },
    withCredentials:true
  })
  setCart(api.data.cart)
}
const Logout  = () => {
  setIsAuthenticated(false);
  setToken("");
  localStorage.removeItem("token");
  toast('Logout SUCCESSFULLY ', {
    position: "top-center",
    autoClose: 1800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    type:"success",
    transition: Bounce,
    });
    setToken(api.data.token);
    setIsAuthenticated(true);
    localStorage.setItem("token", api.data.token)
    return api.data;
}
const decreaseQTY = async (productId, qty) => {
  const api = await axios.post(`${url}/cart/--qty`,
    {productId, qty},
  {
    headers: {
      "Content-Type":"Application/json",
      auth:token,
    },
    withCredentials:true,
  });
  setReload(!reload);
  
}
const removeFromCart =async (productId) =>{
  const api = await axios.delete(`${url}/cart/del/${productId}`,{
    headers : {
      "Content-Type":"Application/json",
      auth:token,

    },
    withCredentials:true
  });
  setReload(!reload);

}
const ClearCart =async () =>{
  const api = await axios.delete(`${url}/cart/clear`,{
    headers : {
      "Content-Type":"Application/json",
      auth:token,

    },
    withCredentials:true
  });
  setReload(!reload);

}



  return (
    <AppContext.Provider value={{products, register, removeFromCart,usedCart,login,url, contact, userAddress, shippingView ,shippingAddress,ClearCart,decreaseQTY,AddProduct,Logout, cart,user,filteredData, addToCart,setFilterData,setProducts,token,setIsAuthenticated,isAuthenticated}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;




















