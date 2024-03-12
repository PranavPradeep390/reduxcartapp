import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import wishlistSlice from "./Slices/wishlistSlice";

const cartStore = configureStore({
    reducer:{
        productReducer : productSlice,
        wishlistReducer:wishlistSlice


    }
})

export default cartStore