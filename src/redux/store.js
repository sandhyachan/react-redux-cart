//store.js
import { configureStore } from "@reduxjs/toolkit";
import CountSlice from './reducers/CountSlice'

const REDUX_STORE = configureStore({
    reducer: {
        countReducer: CountSlice
    }
})

export default  REDUX_STORE;