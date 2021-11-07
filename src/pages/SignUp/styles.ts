import { styled } from "@mui/material/styles";
import { Container as MuiContainer, ContainerProps } from "@mui/material";

export const Container = styled(MuiContainer)<ContainerProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  padding: `${theme.spacing(6)} ${theme.spacing(2)}`,

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "center",
  },
}));

export const BannerWrapper = styled("div")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));
