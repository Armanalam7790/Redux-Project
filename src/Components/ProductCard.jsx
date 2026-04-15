import React from "react";
import { useDispatch } from "react-redux";
import { addTocart, removeFromCart ,decreamentQuanity} from "../features/cardSlice";
import { useLocation } from "react-router";

const ProductCard = ({ product,quantity }) => {
  const dispatch = useDispatch()
  let { pathname } = useLocation()
  return (
    <div className="bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="h-62 bg-gray-50 flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full object-contain"
          />
        </div>

        <div className="p-5">
          <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
            {product.category}
          </p>

          <h2 className="mt-2 text-lg font-bold text-gray-900 line-clamp-2">
            {product.title}
          </h2>

          <p className="mt-3 text-sm text-gray-600 line-clamp-3">
            {product.description}
          </p>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>

            {
              pathname === '/cart' ?(
                <div>
                  <p>{quantity}</p>
                  <button
                 onClick={()=> dispatch(removeFromCart(product))}
                  className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-blue-700 transition">
                  remove from cart
                </button>
                  
                </div>
               ) :
               ( 
                quantity ? <div className="flex gap-6 items-center">
                  <p onClick={()=>dispatch(decreamentQuanity(product))} className='p-2 px-3 bg-red-500' >-</p>
                  <p className='text-xl'>{quantity}</p>
                  <p  
                 
                    onClick={() => dispatch(addTocart(product))} 
                   className='p-2 px-3 bg-green-500'>+</p>
                </div> :
                <button
                  onClick={() => {
                    dispatch(addTocart(product))
                 
                  }}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
                  Add to Cart
                </button>
                )
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;