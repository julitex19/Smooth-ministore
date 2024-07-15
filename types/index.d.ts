interface IProduct {
  id: number;
  name: string;
  qty: number;
  diccont: string;
  image: any;
  newPrice: number;
  oldPrice: string;
  rating: number;
  ratingCount: number;
  title: string;
}

interface IStore {
  cart: IProduct[];
}

export enum ActionType {
  ADD_TO_CART = "ADD_TO_CART",
}

interface IAction {
  type: string;
  payload: any;
}

interface IAppContext {
  state: IStore;
  dispatch: React.Dispatch<IAction>;
}
