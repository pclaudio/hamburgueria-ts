import { HTMLProps } from "react";
import { BoxProps, IconButtonProps, TextFieldProps } from "@mui/material";

export interface ImgProps extends HTMLProps<HTMLImageElement> {
  showcontrols: boolean;
}

export interface SpaceProps extends BoxProps {
  showcontrols: boolean;
}

export interface SearchBoxProps extends TextFieldProps {
  showcontrols: boolean;
}

export interface CustomIconButtonProps extends IconButtonProps {
  showcontrols: boolean;
}
