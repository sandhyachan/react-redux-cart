import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: 'product',
    initialState: {product: []},
    reducers: {
        fetchProducts: (state, actions) => {
                state.product = actions.payload
        }
    }
})

export const {fetchProducts} = ProductSlice.actions
export default ProductSlice.reducer