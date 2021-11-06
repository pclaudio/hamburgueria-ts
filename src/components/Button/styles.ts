import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";

export const StyledButton = styled(Button)<ButtonProps>(({ color, theme }) => ({
  "&.MuiButton-root": {
    padding: "0 20px",
    minWidth: "130px",
    boxShadow: "none",
    fontSize: "16px",
    fontWeight: 600,
    fontStyle: "normal",
    lineHeight: "19.36px",

    ...(color === "primary" && {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
    }),

    ...(color === "secondary" && {
      color: theme.palette.grey[300],
      backgroundColor: theme.palette.grey[100],
    }),

    "&:hover": {
      opacity: 0.5,

      ...(color === "secondary" && {
        opacity: 1,
        color: theme.palette.grey[100],
        backgroundColor: theme.palette.grey[300],
      }),
    },
  },

  "&.MuiButton-sizeLarge": {
    height: "60px",
  },

  "&.MuiButton-sizeMedium": {
    height: "40px",
  },
}));
