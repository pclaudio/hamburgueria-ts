import { createContext, useContext, useEffect, useState } from "react";
import { getProducts, postAddProduct } from "../../services/api";
import { NodeProps, Product } from "../../globalTypes";
import { ProductsProviderData, Response } from "./types";
import { useAuth } from "../Auth";
import { useUser } from "../User";

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: NodeProps): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);

  const [term, setTerm] = useState<string>("");

  const { authToken } = useAuth();

  const { user } = useUser();

  useEffect(() => {
    !!authToken &&
      getProducts()
        .then((response: Response<Product[]>) => setProducts(response.data))
        .catch((error: Response<Product[]>) => console.error(error));
  }, [authToken]);

  const getProductsByTerm = (): Product[] => {
    const filteredProducts = products.filter(
      (product: Product) =>
        product.title.toLowerCase().includes(term.toLowerCase()) ||
        product.category.toLowerCase().includes(term.toLowerCase())
    );

    return !!term ? filteredProducts : products;
  };

  const addProduct = (product: Product): void => {
    postAddProduct(user.id, product)
      .then((response: Response) => setProducts([...products, response.data]))
      .catch((error: Response) => console.error(error));
  };

  return (
    <ProductsContext.Provider
      value={{ products, setTerm, getProductsByTerm, addProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
