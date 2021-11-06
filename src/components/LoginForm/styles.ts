import { styled } from "@mui/material/styles";
import {
  ButtonProps,
  Container as MuiContainer,
  ContainerProps,
  TextFieldProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import TextField from "../TextField";
import Button from "../Button";

export const Container = styled(MuiContainer)<ContainerProps>(({ theme }) => ({
  padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
  border: `2px solid ${theme.palette.grey[50]}`,
  borderRadius: "5px",

  [theme.breakpoints.up("md")]: {
    maxWidth: "500px",
    margin: `52px 70px 0 0`,
  },
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const FormInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const FormButton = styled(Button)<ButtonProps>(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const Message = styled(Typography)<TypographyProps>(({ theme }) => ({
  maxWidth: "250px",
  margin: "0 auto",
  textAlign: "center",
  color: theme.palette.grey[200],
  marginBottom: theme.spacing(3),
}));
