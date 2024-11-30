import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducer/ProductSlice";

const productStore = configureStore({
    reducer: {
        productReducer: ProductSlice    
    }
})

export default productStore