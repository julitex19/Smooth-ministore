import { Dispatch } from "react";
import { IAction } from "../../types";

export const addToCart = (dispatch: Dispatch<IAction>, product: any) => {
  dispatch({ type: "ADD_TO_CART", payload: product });
};

export const removeFromCart = (
  dispatch: Dispatch<IAction>,
  productId: number
) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: productId });
};
