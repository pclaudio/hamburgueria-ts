import { styled } from "@mui/material/styles";
import {
  AppBar,
  AppBarProps,
  Badge as MuiBadge,
  BadgeProps,
  Box as MuiBox,
  BoxProps,
  IconButton as MuiIconButton,
  Toolbar as MuiToolbar,
  ToolbarProps,
} from "@mui/material";
import {
  CustomIconButtonProps,
  ImgProps,
  SearchBoxProps,
  SpaceProps,
} from "./types";
import TextField from "../TextField";

export const Box = styled(MuiBox)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
}));

export const MuiAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  boxShadow: "none",
}));

export const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  height: "80px",

  [theme.breakpoints.up("md")]: {
    padding: "0 115px",
  },
}));

export const Img = styled("img")<ImgProps>(({ showcontrols, theme }) => ({
  ...(!showcontrols && { display: "none" }),
  width: "150px",

  [theme.breakpoints.up("md")]: {
    display: "initial",
  },
}));

export const Space = styled(Box)<SpaceProps>(({ showcontrols, theme }) => ({
  ...(!showcontrols && { display: "none" }),

  [theme.breakpoints.up("md")]: {
    display: "initial",
  },
}));

export const SearchBox = styled(TextField)<SearchBoxProps>(
  ({ showcontrols, theme }) => ({
    ...(showcontrols ? { display: "none" } : { display: "initial" }),
    maxWidth: "385px",

    [theme.breakpoints.up("md")]: {
      display: "initial",
    },
  })
);

export const IconButton = styled(MuiIconButton)<CustomIconButtonProps>(
  ({ showcontrols, hidden, theme }) => ({
    ...(!showcontrols && { display: "none" }),

    color: "#bdbdbd",
    fontSize: "26px",
    fontStyle: "normal",
    fontWeight: 900,
    lineHeight: "28px",

    [theme.breakpoints.up("md")]: {
      ...(hidden ? { display: "none" } : { display: "initial" }),
    },
  })
);

export const Badge = styled(MuiBadge)<BadgeProps>(({ theme }) => ({
  ".MuiBadge-badge": {
    borderRadius: "7px",
  },
}));
