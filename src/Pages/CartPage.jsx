import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'


const CartPage = () => {
 let {cartItems} = useSelector((store)=>store.cart)


 if (cartItems.length <1) return <h1 className='text-5xl flex justify-center mt-50'>No Item Here</h1>
  return (
    <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      {cartItems.map((elem)=>{
        return <ProductCard product={elem} key={elem.id} quantity={elem.quantity} />
      })}
    </div>
  )
}

export default CartPage