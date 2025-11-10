"use client";
import { useProductContext } from "@/context/ProductContext"; 
// import Image from "next/image";


export default function CategoriesSection(){
    const {categories} = useProductContext()

    let allcat = categories.slice(0,4)
    console.log(allcat);
    
    return(
        <>

        {/* <section className="py-12 bg-gray-50">

            <div className="max-w-6xl mx-auto grid grid-col-2 sm:grid-col-3 md:grid-col-4 lg:grid-col-6 gap-4 px-4">
   {
  
            allcat.map((data,i)=>(
                <div key={i} className="p-4 bg-white border rounded-lg shadow-sm text-center font-medium 
                       capitalize cursor-pointer hover:bg-blue-50 hover:border-blue-500 
                       transition">
                        {data.name}
             
             </div>
             
            ))
        }
        </div>
        </section> */}


         <section className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">Popular Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">

        {allcat.map((cat, i) => (
          <div
            key={i}
            className="relative h-48 rounded-xl overflow-hidden group cursor-pointer shadow-md"
          >
            {/* Background Image */}
            {/* <Image
              src={cat.url}
              alt={cat.name}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            /> */}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition"></div>

            {/* Category Text */}
            <h3 className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
              {cat.name}
            </h3>

          </div>
        ))}

      </div>
    </section>
     
        </>
    )
}