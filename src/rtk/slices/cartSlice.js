import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleGetUsersCartApi } from "../../Services/APIs/authentication";

export const getCart = createAsyncThunk("cart/getCart", async (id) => {
  return await handleGetUsersCartApi(id);
});

const initialState = {
  cart: [],
  isLoading: false,
  totalPrice: 0,
  totalItems: 0,
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const productObj = state.cart?.find(ele => ele.id == action.payload.id);
      if(productObj){
        productObj.quantity++;
      }else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(ele => ele.id != action.payload);
    },
    removeAll: (state) => {
      state.cart = [];
    },
    increaseQty: (state, action) => {
      const productObj = state.cart?.find(ele => ele.id == action.payload);
      productObj.quantity++;
    },
    decreaseQty: (state, action) => {
      const productObj = state.cart?.find(ele => ele.id == action.payload);
      if(productObj.quantity > 1)
        productObj.quantity--;
    },
    calcQuantities: (state) => {
      state.totalPrice = state.cart?.reduce((acc, ele) => {
        return acc + (ele.price * ele.quantity);
      }, 0)
      state.totalItems = state.cart?.reduce((acc, ele) => {
        return acc + ele.quantity;
      }, 0)
    },
    increaseCount: (state) => {
      state.count++;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cart = action.payload || [];
    });
  },
});

const cartReducer = cartSlice.reducer;

export const {addItem, removeItem, removeAll, increaseQty, decreaseQty, calcQuantities, increaseCount} = cartSlice.actions;
export default cartReducer;
