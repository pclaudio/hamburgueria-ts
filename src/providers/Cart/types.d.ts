import { Cart, Product } from "../../globalTypes";

export interface CartProviderData {
  cart: Cart;
  setCart: (cart: Cart) => void;
  openCart: boolean;
  handleToggleCart: () => void;
  addProductToCart: (product: Product) => void;
  increaseProductQuantity: (productId: number) => void;
  decreaseProductQuantity: (productId: number) => void;
  removeProductFromCart: (productId: number) => void;
  removeAllProductsFromCart: () => void;
}

export interface Response<T = Cart> {
  data: T;
  response: {
    data: string;
  };
  status: number;
}
