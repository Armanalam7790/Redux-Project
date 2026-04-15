import React, { useEffect, useState } from 'react'
import { axiosInstenc } from '../config/axios.instence'
import ProductCard from '../Components/ProductCard';
import { useSelector } from 'react-redux';

const Shop = () => {
    const [products, setproducts] = useState([])
  const {cartItems} =   useSelector((store)=> store.cart)
    console.log(products);
    useEffect(()=>{
        (async ()=>{
            try {
             let res=  await  axiosInstenc.get('/products')
               
                setproducts(res.data)
                
            } catch (error) {
                 console.log('errors is product api', error);
                 
            }
        })()
    },[])
    
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
        
        products.map((elem)=>{
            let cartItem   = cartItems.find(val=> val.id === elem.id)
           return <ProductCard key={elem.id} product={elem} quantity={cartItem?.quantity} />
        })
        
        }
        </div>
  )
}

export default Shop