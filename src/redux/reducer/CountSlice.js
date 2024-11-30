import { createSlice } from "@reduxjs/toolkit";

const CountSlice = createSlice({
    name: 'count',
    initialState: {count: []},
    reducers: {
        increment: (state, action) => {
            const index = action.payload
            if (state.count[index] === undefined) {
                state.count[index] = 0
              }
            state.count[index] += 1
        },
        decrement: (state, action) => {
            const index = action.payload
            if (state.count[index] > 0) {
                state.count[index] -= 1    
              }
        }
    }
})

export const {increment, decrement} = CountSlice.actions
export default CountSlice.reducer