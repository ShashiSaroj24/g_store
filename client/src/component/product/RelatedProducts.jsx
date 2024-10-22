import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';

const RelatedProducts = ({ category }) => {
    const {products,} = useContext(AppContext); 
    console.log("prooooooooooooo",products)
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    console.log("inside")
    // Ensure products and category are valid before filtering
    console.log("cate", category)
    console.log("pro", products)
    if (products && category) {
        console.log("enter if")
      const filteredProducts = products.filter(
        (product) => product?.category?.toLowerCase() === category.toLowerCase()
      );
      console.log("data", filteredProducts);
      setRelatedProducts(filteredProducts);
    }
  }, [category, products]);

  console.log(category)
  // Handle loading state or when no related products are found
  if (relatedProducts.length === 0) {
    console.log(relatedProducts)
    return <div>
        
        No related products found... </div>;
  }

  return (
    <div className='container'>
     <center><h2 style={{marginTop:"10px"}}>Related Products</h2></center> <br />
      <div className="row">
        {relatedProducts.map((product) => (
          <div className="col-md-4" key={product._id}>
            <div style={{alignContent:"center", alignItems:"center"}}
             className="card card-mycolors mb-4 p-5">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top "  style={{height:"300px"}}
               
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

export default RelatedProducts;
