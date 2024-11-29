//CountSlice.js
import { createSlice } from "@reduxjs/toolkit";

const CountSlice = createSlice({
    name: "count",
    initialState: { count: 0},
    reducers: { 
        incrementCount: (state) =>{
            state.count += 1
        },
        decrementCount: (state)=> {
            return {count: state.count - 1}
        }
     }
})

export const {incrementCount, decrementCount} = CountSlice.actions
export default CountSlice.reducer