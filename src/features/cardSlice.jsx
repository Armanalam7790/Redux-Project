import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

let cartSlice  = createSlice({
    name:"card",
    initialState:{
            cartItems: []
    },
    reducers:{
    addTocart:(state,action)=>{
 let {id}  = action.payload
        let isExist  =  state.cartItems.find((elem)=> elem.id ===  id)

        if (isExist) {
            isExist.quantity += 1
        }
        else{
     state.cartItems.push({...action.payload, quantity:1})
        }
         toast.success('Add item')




    
    },
   
    removeFromCart:(state, action)=>{
        // state.cartItems = []

         let { id } = action.payload

  state.cartItems = state.cartItems.filter(
    (item) => item.id !== id
  )
  toast.error('remove item')
    },

    decreamentQuanity:(state, action)=>{
         let {id}  = action.payload
    const item  =   state.cartItems.find((elem )=>elem.id === id)

    if (item.quantity>1) {
          item.quantity -= 1
    }
    else{
    state.cartItems =     state.cartItems.filter((elem)=>{
            return elem.id !== id
        })
    }
  

    }

    }
})

export const  {addTocart,removeFromCart,decreamentQuanity} = cartSlice.actions
export default cartSlice.reducer