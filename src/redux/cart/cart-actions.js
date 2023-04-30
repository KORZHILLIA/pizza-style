import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/add");
export const removeFromCart = createAction("cart/remove");
export const removeProductFromCart = createAction("cart/removeProduct");
export const clearCart = createAction("cart/clear");
