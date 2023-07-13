import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./constants";

export const addToCart = (data) => {
  console.warn("Item added", data);
  return {
    type: ADD_TO_CART,
    data: data
  };
};
export const removeFromCart = (data) => {
  console.warn("Item removed", data);
  return {
    type: REMOVE_FROM_CART,
    data: data
  };
};
export const clearCart = (data) => {
  console.warn("Item removed", data);
  return {
    type: CLEAR_CART,
    data: data
  };
};
