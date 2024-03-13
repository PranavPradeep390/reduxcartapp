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
        }
    }
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer