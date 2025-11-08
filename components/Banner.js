import Image from "next/image";
import Show from "@/public/show.png"

export default function Banner(){
    return(
        <>
<section className="bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <div className="p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Buy Quality Products 
          </h1>

          <p className="mt-4 text-lg text-gray-600">
                  Find top quality fashion, electronics, and more at unbeatable prices!

     
          </p>

          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-red-800 cursor-pointer text-white text-lg rounded-lg hover:bg-red-900 transition">
              Get Started
            </button>

            <button className="px-6 py-3 border border-red-800 cursor-pointer  text-red-800 text-lg rounded-lg hover:bg-red-90 transition">
              Learn More
            </button>
          </div>
        </div>

      <div className="relative w-full ">
        <Image src={Show} alt="show" className="object-cover shadow-lg  rounded-2xl "/>
      </div>
    </div>
   </section>
        
        </>
    )
}