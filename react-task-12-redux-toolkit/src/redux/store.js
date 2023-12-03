import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/usersSlice.js";
import basketReducer from "./slices/basketSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    basket: basketReducer
  },    
});

export default store;
