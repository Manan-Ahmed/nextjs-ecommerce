"use client"
// import Image from "next/image";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function ProductList() {
    let [products,setProducts] = useState([])
let [total,setTotal] = useState(0)
let [skip,setSkip] = useState(0)
let limit = 6
    useEffect(()=>{
        fetch(`https://dummyjson.com/products?${limit}=10&${skip}`)
.then(res => res.json())
.then((res) =>{
    console.log(res.products)
    setProducts(res.products)
    setTotal(res.total)
    
    })
    },[skip])
    console.log("products",products);
    

const totalPages = Math.ceil(total / limit)

const handleNext = ()=>{
   if(skip + limit < total) setSkip(skip + limit)
}

const handlePrev = ()=>{
   if(skip - limit >= 0) setSkip(skip - limit)
}

  return (
    
           <>
           <h2 className="text-center text-2xl"> ProductList</h2>

           
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {products.map((item) => (
    <div
      key={item.id}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <Image
        src={item.thumbnail}
        alt={item.title}
        width={400}
        height={300}
        className="object-cover w-full h-64"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-400 line-clamp-3 mb-3">
          {item.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-semibold text-lg">
            ${item.price}
          </span>
          <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
            View
          </button>
        </div>
      </div>
    </div>
  ))}
</div> 




 {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={skip === 0}
          className={`px-4 py-2 rounded-md border ${
            skip === 0
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>

        <span className="text-gray-700 dark:text-gray-300 font-medium">
          Page {skip / limit + 1} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={skip + limit >= total}
          className={`px-4 py-2 rounded-md border ${
            skip + limit >= total
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
        </div>




           </>
     
  );
}
