import { styled } from "@mui/material/styles";
import {
  Box as MuiBox,
  BoxProps,
  Container as MuiContainer,
  ContainerProps,
  Grid as MuiGrid,
  GridProps,
  Typography,
  TypographyProps,
} from "@mui/material";

export const Container = styled(MuiContainer)<ContainerProps>(({ theme }) => ({
  padding: `${theme.spacing(3)} 0`,

  [theme.breakpoints.up("md")]: {
    padding: `${theme.spacing(4)} 115px`,
  },
}));

export const Box = styled(MuiBox)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
}));

export const GridContainer = styled(MuiGrid)<GridProps>(({ theme }) => ({
  flexWrap: "nowrap",
  overflowX: "scroll",

  [theme.breakpoints.up("sm")]: {
    flexWrap: "wrap",
    overflowX: "initial",
  },
}));

export const GridItem = styled(MuiGrid)<GridProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",

  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(2),

    "&:first-of-type": {
      paddingLeft: theme.spacing(3),
    },

    "&:last-child": {
      paddingRight: theme.spacing(2),
    },
  },
}));

export const Message = styled(Typography)<TypographyProps>(({ theme }) => ({
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.grey[600],

  [theme.breakpoints.up("md")]: {
    paddingRight: 0,
    paddingLeft: 0,
  },
}));
