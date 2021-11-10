import { styled } from "@mui/material/styles";
import { CustomButtonProps, CustomCardMediaProps } from "./types";
import {
  Card,
  CardActions as MuiCardActions,
  CardActionsProps,
  CardContent as MuiCardContent,
  CardContentProps,
  CardMedia as MuiCardMedia,
  CardProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import Button from "../Button";

export const CardContainer = styled(Card)<CardProps>(({ theme }) => ({
  width: "300px",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: theme.palette.grey[100],
  borderRadius: "5px",
  boxShadow: "none",

  "&:focus-within": {
    borderColor: theme.palette.primary.main,
  },
}));

export const CardFocusButton = styled("button")(({ theme }) => ({
  background: "none",
  border: "none",
  borderStyle: "none",
  padding: 0,
  width: "100%",
}));

export const CardMedia = styled(MuiCardMedia)<CustomCardMediaProps>(
  ({ theme }) => ({
    height: "150px",
    backgroundColor: theme.palette.grey[50],
  })
);

export const CardContent = styled(MuiCardContent)<CardContentProps>(
  ({ theme }) => ({
    paddingTop: theme.spacing(3),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  })
);

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  textAlign: "left",
  color: theme.palette.grey[600],
  marginBottom: "16px",
}));

export const Category = styled(Typography)<TypographyProps>(({ theme }) => ({
  display: "block",
  textAlign: "left",
  color: theme.palette.grey[300],
  marginBottom: "14px",
}));

export const Price = styled(Typography)<TypographyProps>(({ theme }) => ({
  textAlign: "left",
  color: theme.palette.primary.main,
}));

export const CardActions = styled(MuiCardActions)<CardActionsProps>(
  ({ theme }) => ({
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  })
);

export const AddButton = styled(Button)<CustomButtonProps>(
  ({ focus, theme }) => ({
    "&.MuiButtonBase-root.MuiButton-root": {
      color: theme.palette.common.white,

      ...(focus
        ? { backgroundColor: theme.palette.primary.main }
        : { backgroundColor: "#bdbdbd" }),
    },
  })
);
