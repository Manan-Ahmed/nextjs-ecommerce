
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
    const [addCart, setAddCart] = useState([]);
        const [categories, setCategories] = useState([]);

        const [selecetedCategory, setSelectedCategory] = useState('all');

  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const limit = 20;


   useEffect(() => {
    fetch(`https://dummyjson.com/products/categories`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCategories(res)
        
      })

      .catch((err) => console.error("Fetch error:", err));
  }, []);

  useEffect(()=>{
    let url = selecetedCategory === "all" ? `https://dummyjson.com/products?limit=${limit}&skip=${skip}` :
    `https://dummyjson.com/products/category/${selecetedCategory}?limit=${limit}&skip=${skip}`
   fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products || []);
        setTotal(res.total || 0);
        console.log("✅ Data fetched:", res);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [skip,selecetedCategory])



  const totalPages = total ? Math.ceil(total / limit) : 0;
  const currentPage = skip / limit + 1;

  const handleNext = () => {
    if (currentPage < totalPages) setSkip(skip + limit);
  };

  const handlePrev = () => {
    if (currentPage > 1) setSkip(skip - limit);
  };

  const handlePageClick = (page) => {
    setSkip((page - 1) * limit);
  };



const addToCart = (product)=>{
  let arr = addCart
     let itemIndex = addCart.findIndex((item)=>  item.id === product.id)
console.log(itemIndex);

     if(itemIndex == -1){
      arr.push({...product,quantity:1})
      
         setAddCart([...arr])
         console.log('add',addCart);

     }else{
      arr[itemIndex].quantity++
      setAddCart([...arr])
console.log('no add',addCart);

     }
}


  return (
    <ProductContext.Provider
      value={{
        products,
        totalPages,
        skip,
        limit,
        currentPage,
        categories,selecetedCategory, setSelectedCategory, setCategories,
        handleNext,
        handlePrev,
        handlePageClick,
        addToCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
