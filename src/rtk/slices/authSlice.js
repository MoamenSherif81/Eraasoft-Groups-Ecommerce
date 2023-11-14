import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleGetUsersApi } from "../../Services/APIs/authentication";
/**
 * Create slice (shape)
 * initialState object
 * reducer
 * actions
 */

export const getUsers = createAsyncThunk("auth/getUsers", async () => {
  return await handleGetUsersApi();
});

const localStorageData = JSON.parse(localStorage.getItem('isLoggedIn')) || {
  isAuth: false,
  userData: null
};
  
const initialState = {
  users: [],
  ...localStorageData
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      state.isAuth = true;
      const data = {...action.payload};
      delete data.cart;
      state.userData = data;
      localStorage.setItem(
        "isLoggedIn",
        JSON.stringify({ isAuth: true, userData: data })
      );
    },
    logout: (state) => {
      (state.isAuth = false), (state.userData = null);
      localStorage.setItem(
        "isLoggedIn",
        JSON.stringify({ isAuth: false, userData: null})
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

const authReducer = authSlice.reducer;

export const { addUser, login, logout } = authSlice.actions;
export default authReducer;
