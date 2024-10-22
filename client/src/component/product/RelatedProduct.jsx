import React, { useContext, useEffect, useState } from 'react'

import AppContext from '../../context/AppContext'

const RelatedProduct = ({category}) => {
  const {products} = useContext(AppContext);
  const [relatedProduct, setRealtedProduct] = useState([]);
  useEffect(()=>{
    setRealtedProduct(
      products.filter(
        (data) => data?.category?.toLowerCasse() == category?.toLowerCasse()
      )
    )
  })

  return (
    <>
    <h1>Related product</h1>
    

         
    </>
    
  )
}

export default RelatedProduct