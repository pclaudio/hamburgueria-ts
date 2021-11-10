import { Product } from "../../globalTypes";

export interface ProductsProviderData {
  products: Product[];
  setTerm: (term: string) => void;
  getProductsByTerm: () => Product[];
  addProduct: (product: Product) => void;
}

export interface Response<T = Product> {
  data: T;
  response: {
    data: string;
  };
  status: number;
}
