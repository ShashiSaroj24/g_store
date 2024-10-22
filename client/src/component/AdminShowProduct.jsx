import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const AdminShowProduct = () => {
  const { products,  } = useContext(AppContext); // Removed Deleteproducts since it's unused
  const url = "http://localhost:4000/api";
  

  // Delete function with sta te update
  const deleteitem = async(id) => {
    console.log(id);
    const api = await axios.delete(`${url}/product/${id}`)
    // .then((res)=>{
    //   console.log(res)
    //   window.location.reload()
    // })
    // .catch((err)=>{
    //   console.log("error:", err)
    // })
      console.log(api.data)
  };

  return (
    <>
      <div className='container'>
        <div className='row pt-5'>
          <div className='col-4'></div>
          <div className='col-4'>
            <h1 style={{ textAlign: 'center' }}>Admin Panel</h1>
            
           <button  href="/AddProduct" style={{width:"130px" , color:"#ffc107", backgroundColor:" #050a30",marginLeft:"600px"}}  class="btn " type="submit"> Add Product  </button>
          </div>
          <div className='col-4'></div>
        </div>
      </div>
      <div className='container'>
        <div className='row pt-5'>
          <div className='col-1'></div>
          <div className='col-10'>
            <table className='table table-striped border border-3'>
              <thead>
                <tr>
                  <th style={{ backgroundColor: 'black', color: '#FDD835' }} scope='col'>
                    S. NO
                  </th>
                  <th style={{ backgroundColor: 'black', color: '#FDD835' }} scope='col'>
                    Title
                  </th>
                  <th style={{ backgroundColor: 'black', color: '#FDD835' }} scope='col'>
                    Quantity
                  </th>
                  <th style={{ backgroundColor: 'black', color: '#FDD835' }} scope='col'>
                    Price
                  </th>
                  <th style={{ backgroundColor: 'black', color: '#FDD835' }} scope='col'>
                    Add Image
                  </th>
                  <th style={{ backgroundColor: 'black', color: '#FDD835' }} scope='col'>
                    Category
                  </th>
                  <th style={{ backgroundColor: 'black', color: '#FDD835' }}></th>
                  <th style={{ backgroundColor: 'black', color: '#FDD835' }}></th>
                </tr>
              </thead>
              <tbody>
                {products?.map((i, index) => (
                  <tr key={i._id}>
                    <th className='pt-3' scope='row'>
                      {index + 1}
                    </th>
                    <td className='pt-3'>{i.title}</td>
                    <td className='pt-3'>{i.qty}</td>
                    <td className='pt-3'>Rs. {i.price}</td>
                    <td>
                      <a href={i.image}>
                        <img style={{ height: '50px', width: '50px' }} src={i.image} alt="product" />
                      </a>
                    </td>
                    <td className='pt-3'>{i.category}</td>
                    <td className='pt-3'>
                     <Link style={{color:"green"}} to={`/editproduct/${i._id}`}> <i  className='bi bi-pencil'></i></Link>
                    </td>
                    <td className='pt-3'>
                      <i
                        className='bi bi-trash3 text-danger'
                        style={{ cursor: 'pointer' }}
                        onClick={() => deleteitem (i._id)}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='col-1'></div>
        </div>
      </div>
    </>
  );
};

export default AdminShowProduct;
