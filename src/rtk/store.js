import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';


const store = configureStore({
  reducer: {authReducer, cartReducer}
})

export default store;