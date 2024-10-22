import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Foot from '../Foot';
import Navbar from '../Navbar';
import RelatedProducts from './RelatedProducts';

const ProductDetail = () => {
  const [product, setProduct] = useState(null); // Initialize as null or {}
  const { id } = useParams();
  const url = "http://localhost:4000/api";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const api = await axios.get(`${url}/product/${id}`, {
          headers: {
            "Content-Type": "Application/json",
          },
          withCredentials: true,
        });
        console.log(api.data.product);
        setProduct(api.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading ..... </div>;
  }

  return (
    <>
      <div className='row border shadow p-5'>
        <div className='col-md-5 text-center'>
          <img
            style={{ height: "320px" , width:"380px"}}
            src={product.image}
            alt={product.title} // Add alt text
          />
        </div>
        <div className='col-md-7'>
          <h3>{product.title}</h3><br />
          <p>{product.description}</p>
          <div
            style={{ width: "660px", color: "#050a30", fontSize: "40px" }}
            className=""
          >
            Rs. {product.price}
          </div><br /><br />
          <button
            style={{ height: "60px", width: "250px" }}
            className="btn btn-mycolor"
          >
            Add To Cart
          </button>
          &emsp;
          <button
            style={{ width: "250px", height: "60px" }}
            className="btn btn-mycolors"
            type="button"      >
            BUY NOW
          </button><br></br>
          <a href='/ShowProduct'><button
            style={{ width: "250px", height: "60px" ,marginTop:"50px", marginLeft:"100px"}}
            className="btn btn-mycolorss"
            type="button" >
            BACK
          </button></a>
        </div>
      </div>
      {product?.category && <RelatedProducts category={product.category} />}
      <br></br>
      <Foot />
    </>
  );
};

export default ProductDetail;
