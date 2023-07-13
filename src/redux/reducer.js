import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./constants";

export const cartData = (data = [], action) => {
  //   if (action.type === ADD_TO_CART) {
  //     console.log("Reducer called ", action);
  //     return action.data;
  //   } else return "no action called";

  switch (action.type) {
    case ADD_TO_CART:
      // Add to cart logic
      console.warn("Add to cart working", action);
      return [action.data, ...data];
      
    case REMOVE_FROM_CART:
      // Add to cart logic
      console.warn("Remove to cart working", action);
      data.length = data.length-1;
      return [...data];

    case CLEAR_CART:
      // Add to cart logic
      console.warn("Clear is working", action);
      return [];
    default:
      return data;
  }
};
