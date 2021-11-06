import { ButtonProps, CardMediaProps } from "@mui/material";

export interface CustomCardMediaProps extends CardMediaProps {
  component?: string;
  alt?: string;
}

export interface CustomButtonProps extends ButtonProps {
  focus: boolean;
}
