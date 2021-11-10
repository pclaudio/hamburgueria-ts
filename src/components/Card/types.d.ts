import { ButtonProps, CardMediaProps } from "@mui/material";
import { Product } from "../../globalTypes";

export interface CardProps {
  product: Product;
}
export interface CustomCardMediaProps extends CardMediaProps {
  component?: string;
  alt?: string;
}

export interface CustomButtonProps extends ButtonProps {
  focus: boolean;
}
