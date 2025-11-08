"use client";
import { useProductContext } from "@/context/ProductContext"; 
import Image from "next/image";

export default function ProductList() {
  const { products, handleNext, handlePrev, totalPages, handlePageClick,currentPage,addToCart, categories,selecetedCategory, setSelectedCategory, setCategories, } = useProductContext();

  console.log('products',products)

  return (
    <>
   

   <div className="mt-24">
      <h2 className="text-center text-2xl">Product List</h2>


      <div className="m-2 text-center mt-6">

        <button className="px-4 py-2 rounded border cursor-pointer" onClick={()=>{setSelectedCategory("all")}}> All </button>
        {categories.map((data,i)=>(
          <button className="px-4 py-2 rounded border m-2 cursor-pointer" key={i} onClick={()=>{setSelectedCategory(data.name)}}>
            {data.name}
          </button>
        ))}
      </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 gap-6 m-6">
      {
        products.map((data,i)=>(
          <div
      key={data.id + i}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <Image
        src={data.thumbnail}
        alt={data.title}
        width={400}
        height={300}
        className="object-cover w-full h-64"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {data.title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-400 line-clamp-3 mb-3">
          {data.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-red-800 font-semibold text-lg">
            ${data.price}
          </span>
          <button className="px-3 py-1 bg-red-800 text-white text-sm rounded-lg hover:bg-red-800 transition">
            View
          </button>
            <button onClick={()=> addToCart(data)} className="px-3 py-1 bg-red-800 text-white text-sm rounded-lg hover:bg-red-800 transition">
            addtocart
          </button>
        </div>
      </div>
    </div>



        )
        )
      }

     
    </div >

<div className="flex justify-center gap-4 ">


<div className="text-center">
      <button onClick={handlePrev} className="px-3 py-2 rounded-md border bg-blue-600 text-white">Prev</button>
     </div>

{/* Page Numbers */}

        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`px-3 py-1 rounded-md border ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {page}
            </button>
          );
        })}

     <div className="text-center">
      <button onClick={handleNext} className="px-3 py-2 rounded-md border bg-blue-600 text-white">Next</button>
</div>
     </div>
</div>
    </>
  );
}
