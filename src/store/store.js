import { configureStore } from '@reduxjs/toolkit';
import sizeReducer from "./sizeSlice"; 

export default configureStore({
    reducer:{
        size:sizeReducer
    }


})