import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
//import './App.css'
//import Foot from './component/Foot'
import Contactus from './component/Contactus'
import Login from './component/user/Login'
import Register from './component/user/Register'
import Navbar from './component/Navbar'
import SearchProduct from './component/product/SearchProduct'
import ShowProduct from './component/product/ShowProduct'
import ProductDetail from './component/product/ProductDetail'
import AddProduct from './component/product/AddProduct'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AdminShowProduct from './component/AdminShowProduct'
import Editproduct from './component/Editproduct'
import Adminlogin from './component/Adminlogin'
import Profile from './component/user/Profile'
import Cart from './component/Cart'
import Address from './component/Address'
import Checkout from './component/Checkout'
import Aboutus from './component/Aboutus'
import Faqs from './component/Faqs'
//import Navbar from './component/Navbar'


function App() {

  return (
    <>
    
    <Navbar/>
    { <ToastContainer/> }
   <Routes>
    
      <Route path='/login' element={<Login/>}/>
      <Route path='/faqs' element={<Faqs/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/address' element={<Address/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/profile' element={<Profile/>}/>
     <Route path='/adminlogin' element={<Adminlogin/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Contactus' element={<Contactus/>}/>
      <Route path='/Admin' element={<AdminShowProduct/>}/>
      <Route path='/editproduct/:id' element={<Editproduct/>}/>
      
      <Route path='/product/search/:term' element={<SearchProduct />}/>
      <Route path='/' element={<ShowProduct />}/>
      <Route path='/addproduct' element={<AddProduct />}/>
      <Route path='/Product/:id' element={<ProductDetail/>}/>
    </Routes>
   
    </>
  )
}


export default App
