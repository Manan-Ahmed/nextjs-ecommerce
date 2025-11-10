// 'use client'
// import use from "react" 

// export default function DetailProduct({params}){
//      const unwrapedParams = use(params)

//          console.log('params',unwrapedParams.id);
//     return(
//         <>
        
//         <h4>Dynamic route</h4>
//         </>
//     )
// }
// function Page({ params }) {
//   // direct access of `params.id`.
//   return <p>ID: {params.id}</p>
// }
'use client'
// import * as React from 'react'
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
 import { use, useEffect,useState } from "react";

export default function ProductDetail({ params }) {
  const unwrapped = use(params);
  let [product,setProduct] = useState([])
  const { id } = unwrapped;

     useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))

      .catch((errr)=> console.log(errr)
      )

      
  }, [id]);

  if(!product) return  <p>Loading...</p>
  return (
   <>
   {
    product ?
    product.map((data)=>{
        console.log(data);
        
    })
    : <h3>not found</h3>
   }
   </>
  );
}