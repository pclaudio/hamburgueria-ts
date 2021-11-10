import { ReactNode } from "react";

export interface NodeProps {
  children: ReactNode;
}

export interface Credentials {
  name?: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
  role?: string;
}

export interface User {
  email: string;
  name: string;
  role: string;
  id: number;
}

export interface Product {
  id: number;
  userId: number;
  title: string;
  category: "hamburgueres" | "bebidas" | "acompanhamentos" | "sobremesas";
  price: number;
  quantity: number;
}

export interface Cart {
  id?: number;
  userId?: number;
  products: Product[];
}
