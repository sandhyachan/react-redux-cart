import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducer/ProductSlice";
import CountSlice from "./reducer/CountSlice"

const productStore = configureStore({
    reducer: {
        productReducer: ProductSlice,
        countReducer: CountSlice
    }
})

export default productStore