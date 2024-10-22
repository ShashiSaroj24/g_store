


import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { useParams } from 'react-router-dom';

const SearchProduct = () => {
  const{ products, } = useContext(AppContext);  
    console.log("pro:----",products)
  const [SearchProduct, setSearchProduct] = useState([]);
  const {term } = useParams()
  console.log(term)
  useEffect(() =>{
    setSearchProduct(
      products.filter(
        (data) => data?.title?.toLowerCase().includes(term.toLowerCase())
      )
    )
  }, [term, products])
  console.log("data")
  console.log(SearchProduct)
  if (!SearchProduct) {
    return <div>Loading ..... </div>
  }

  return (
    <div>

     <center><h2 style={{marginTop:"10px"}}>Search Products</h2></center> <br />
      <div className="row">
        {SearchProduct.map((product) => (
          <div className="col-md-4" key={product._id}>
            <div style={{alignContent:"center", alignItems:"center", width:"400px", marginLeft:"50px", marginTop:"40px"}} className="card card-mycolors mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top "
                style={{ height: '230px',width:"180px", objectFit: 'cover' }}
              />
              <div className="card-body ">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Rs. {product.price}</p>
                <a href={`/product/${product._id}`} className="btn btn-mycolors">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchProduct
