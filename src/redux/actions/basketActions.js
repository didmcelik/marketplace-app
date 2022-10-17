import { ActionTypes } from "../constants/action-types";
export const setBasket = (products) => {
  return {
    type: ActionTypes.SET_BASKET_PRODUCTS,
    payload: products,
  };
};
