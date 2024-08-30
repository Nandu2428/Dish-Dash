import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice";

const AppStore = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
export default AppStore;
