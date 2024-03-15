import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart : (state,action)=>
         {
            const existingProducts = state.find(item=>item.id==action.payload.id)
            if(existingProducts){
                const remainingProducts = state.filter(item=>item.id!=existingProducts.id)
                existingProducts.quantity++
                existingProducts.totalPrice = existingProducts.quantity * existingProducts.price
                state=[...remainingProducts,existingProducts]
            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        removeCartItem : (state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },incQuantity: (state,action)=>{
            const existingProducts = state.find(item=>item.id==action.payload)
            existingProducts.quantity++
            existingProducts.totalPrice = existingProducts.quantity * existingProducts.price
            const remainingProducts=state.filter(item=>item.id!=existingProducts.id)
            state=[...remainingProducts,existingProducts]
        },
        decQuantity: (state,action)=>{
            const existingProducts = state.find(item=>item.id==action.payload)
            existingProducts.quantity--
            existingProducts.totalPrice = existingProducts.quantity * existingProducts.price
            const remainingProducts=state.filter(item=>item.id!=existingProducts.id)
            state=[...remainingProducts,existingProducts]
        },
        emptyCart:(state,action)=>{
            return state =[]
        }
    }
})
export const {addToCart,removeCartItem,incQuantity,decQuantity,emptyCart} = cartSlice.actions
export default cartSlice.reducer