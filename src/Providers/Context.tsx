"use client";
import { initialState, storeReducer } from "@/action/reducer";
import React, { createContext, useContext, useReducer } from "react";
import { IAppContext, IStore } from "../../types";

export const StoreProvider = createContext<IAppContext>({
  state: initialState,
  dispatch: () => {},
});

interface IProps {
  children: React.ReactNode;
}

const Context = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreProvider.Provider value={{ state, dispatch }}>
      {children}
    </StoreProvider.Provider>
  );
};

export default Context;

export const useStore = () => useContext(StoreProvider);
