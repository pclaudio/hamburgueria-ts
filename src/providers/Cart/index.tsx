import { createContext, useContext, useEffect, useState } from "react";
import { getCart, patchUpdateCart, postCreateCart } from "../../services/api";
import { useUser } from "../User";
import { Cart, NodeProps, Product } from "../../globalTypes";
import { CartProviderData, Response } from "./types";
import _ from "lodash";

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: NodeProps): JSX.Element => {
  const [cart, setCart] = useState<Cart>({} as Cart);

  const [openCart, setOpenCart] = useState<boolean>(false);

  const { user } = useUser();

  useEffect(() => {
    !_.isEmpty(user) &&
      getCart(user.id)
        .then((response: Response<Cart[]>) => setCart(response.data[0]))
        .catch((error: Response<Cart[]>) => console.error(error));
  }, [user]);

  const handleToggleCart = (): void => {
    setOpenCart(!openCart);
  };

  const addProductToCart = (product: Product): void => {
    if (_.isEmpty(cart)) {
      const newCart: Cart = { userId: user.id, products: [product] };

      postCreateCart(newCart)
        .then((response: Response) => setCart(response.data))
        .catch((error: Response) => console.error(error));
    } else {
      const productIsNotAdded: boolean =
        cart.products.find(
          (currentProduct) => currentProduct.id === product.id
        ) === undefined;

      if (productIsNotAdded) {
        const products: Product[] = [...cart.products, product];

        patchUpdateCart(cart.id, { products })
          .then((response: Response) => setCart(response.data))
          .catch((error: Response) => console.error(error));
      }
    }
  };

  const increaseProductQuantity = (productId: number): void => {
    const products = cart.products;

    const productIndex = products.findIndex(
      (product) => product.id === productId
    );

    products[productIndex].quantity++;

    patchUpdateCart(cart.id, { products })
      .then((response: Response) => setCart(response.data))
      .catch((error: Response) => console.error(error));
  };

  const decreaseProductQuantity = (productId: number): void => {
    const products = cart.products;

    const productIndex = products.findIndex(
      (product) => product.id === productId
    );

    products[productIndex].quantity--;

    patchUpdateCart(cart.id, { products })
      .then((response: Response) => setCart(response.data))
      .catch((error: Response) => console.error(error));
  };

  const removeProductFromCart = (productId: number): void => {
    const products = cart.products.filter(
      (product) => product.id !== productId
    );

    patchUpdateCart(cart.id, { products })
      .then((response: Response) => setCart(response.data))
      .catch((error: Response) => console.error(error));
  };

  const removeAllProductsFromCart = (): void => {
    patchUpdateCart(cart.id, { products: [] })
      .then((response: Response) => setCart(response.data))
      .catch((error: Response) => console.error(error));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        openCart,
        handleToggleCart,
        addProductToCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        removeProductFromCart,
        removeAllProductsFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
