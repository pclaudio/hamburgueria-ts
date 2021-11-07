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
    margin: `52px 0 0 70px`,
  },
}));

export const TitleWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: theme.spacing(3),
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.grey[600],
}));

export const LoginLink = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.grey[300],
}));

export const FormInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const FormButton = styled(Button)<ButtonProps>(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));
