import { combineReducers } from "@reduxjs/toolkit";
import cartPersistReducer from "./cart/cart-reducer";

const rootReducer = combineReducers({
  cart: cartPersistReducer,
});

export default rootReducer;
