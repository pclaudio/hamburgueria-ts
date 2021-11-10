import axios, { AxiosInstance } from "axios";
import { Cart, Credentials, Product } from "../globalTypes";
import { ApiProps, HeadersProps } from "./types";

const getHeaders = (): HeadersProps => {
  const token: string = localStorage.getItem("@BK/token") || "";

  return !!token
    ? { headers: { Authorization: `Bearer ${token}` } }
    : ({} as HeadersProps);
};

const api: AxiosInstance = axios.create({
  baseURL: "https://pclaudio-hamburgueria-api.herokuapp.com",
  responseType: "json",
});

const genericPost = ({ url, data }: ApiProps): Promise<any> => {
  const headers: HeadersProps = getHeaders();

  return api.post(url, data, headers);
};

const genericPatch = ({ url, data }: ApiProps): Promise<any> => {
  const headers: HeadersProps = getHeaders();

  return api.patch(url, data, headers);
};

const genericGet = ({ url }: ApiProps): Promise<any> => {
  const headers: HeadersProps = getHeaders();

  return api.get(url, headers);
};

export const postLogin = (data: Credentials): Promise<any> => {
  const url = "/login";

  return genericPost({ url, data });
};

export const postSignUp = (data: Credentials): Promise<any> => {
  const url = "/signup";

  return genericPost({ url, data });
};

export const postAddProduct = (userId: number, data: Product): Promise<any> => {
  const url = "/products";

  return genericPost({ url, data: { ...data, userId } });
};

export const postCreateCart = (data: Cart): Promise<any> => {
  const url = "/carts";

  return genericPost({ url, data });
};

export const getProducts = (): Promise<any> => {
  const url = "/products";

  return genericGet({ url });
};

export const getCart = (userId: number): Promise<any> => {
  const url = `/carts?userId=${userId}`;

  return genericGet({ url });
};

export const patchUpdateCart = (
  cartId: number | undefined,
  data: Cart
): Promise<any> => {
  const url = `/carts/${cartId}`;

  return genericPatch({ url, data });
};
