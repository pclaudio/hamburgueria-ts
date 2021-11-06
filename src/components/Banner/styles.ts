import { styled } from "@mui/material/styles";
import { FiShoppingBag } from "react-icons/fi";

export const Container = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    marginTop: "145px",
  },
}));

export const Logo = styled("img")(({ theme }) => ({
  width: "230px",
  height: "35px",
  marginBottom: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(3),
  },
}));

export const TextBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  maxWidth: "377px",
  minHeight: "95px",
  border: `1px solid ${theme.palette.grey[100]}`,
  borderRadius: "5px",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(3),
  },
}));

export const TextIcon = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "60px",
  minHeight: "60px",
  borderRadius: "5px",
  background: "rgba(39, 174, 96, 0.1)",
  marginRight: theme.spacing(2),
}));

export const ShoppingBag = styled(FiShoppingBag)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "28px",
}));

export const Text = styled("p")(({ theme }) => ({
  maxWidth: "267px",
  margin: 0,
  fontFamily: "'Inter', sans-serif",
  fontStyle: "normal",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "22px",
}));

export const TextStrong = styled("strong")(({ theme }) => ({
  fontFamily: "'Inter', sans-serif",
  fontStyle: "normal",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "22px",
}));

export const EllipsesBox = styled("div")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "180px",
    height: "80px",
  },
}));

export const EllipsesLine = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
}));

export const Ellipse = styled("div")(({ theme }) => ({
  width: "10.9px",
  height: "10.9px",
  borderRadius: "50%",
  backgroundColor: theme.palette.grey[100],
}));
