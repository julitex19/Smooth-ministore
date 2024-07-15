"use client";
import { IAction, IStore } from "../../types";


const data =
  typeof window !== "undefined" ? window.localStorage.getItem("store") : null;
const store = data
  ? JSON.parse(data)
  : {
      cart: [],
    };

export const initialState = store;

export const storeReducer = (state: IStore, action: IAction) => {
  switch (
    action.type
  ) {
    case "ADD_TO_CART": {
      const product = action.payload;
      const index = state.cart.findIndex((p) => p.id === product.id);

      console.log(product);

      let currentStore;

      if (index !== -1) {
        currentStore = [...state.cart];
        currentStore.splice(index, 1, {
          ...product,
          qty: product.qty,
        });
      } else {
        currentStore = [...state.cart, action.payload];
      }

      const updatedState = {
        ...state,
        cart: currentStore,
      };

      localStorage.setItem("store", JSON.stringify(updatedState));

      return updatedState;
    }
    case "REMOVE_FROM_CART": {
      console.log(action.payload);
      const productId = action.payload;
      const updatedState = {
        ...state,
        cart: state.cart.filter((product) => product.id !== productId),
      };
      localStorage.setItem("store", JSON.stringify(updatedState));
      return updatedState;
    }
    default: {
      return state;
    }
  }
};
