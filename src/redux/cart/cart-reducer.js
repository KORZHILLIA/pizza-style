import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import * as cartActions from "./cart-actions";

const initialState = {
  content: [],
};

const cartReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(cartActions.addToCart, (store, { payload }) => {
      const { content } = store;
      return { ...store, content: [...content, payload] };
    })
    .addCase(cartActions.removeFromCart, (store, { payload }) => {
      const { content } = store;
      const isIdPresent = content.includes(payload);
      if (!isIdPresent) {
        return;
      } else {
        const newContent = [...content];
        const requiredIdx = newContent.indexOf(payload);
        newContent.splice(requiredIdx, 1);
        return { ...store, content: newContent };
      }
    })
    .addCase(cartActions.removeProductFromCart, (store, { payload }) => {
      const { content } = store;
      const newContent = content.filter((id) => id !== payload);
      return { ...store, content: newContent };
    })
    .addCase(cartActions.clearCart, (store) => ({ ...store, content: [] }))
);

const persistConfig = {
  key: "cart",
  storage,
};

const cartPersistReducer = persistReducer(persistConfig, cartReducer);

export default cartPersistReducer;
