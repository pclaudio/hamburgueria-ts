import { styled } from "@mui/material/styles";
import {
  Box as MuiBox,
  BoxProps,
  Card,
  CardActions as MuiCardActions,
  CardActionsProps,
  CardContent as MuiCardContent,
  CardContentProps,
  CardProps,
  IconButton as MuiIconButton,
  IconButtonProps,
  Typography,
  TypographyProps,
} from "@mui/material";

export const CardContainer = styled(Card)<CardProps>(({ theme }) => ({
  display: "flex",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: theme.spacing(2),
}));

export const CardMediaRoot = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "82.26px",
  height: "80px",
  borderRadius: "5px",
  backgroundColor: theme.palette.grey[50],
}));

export const CardContent = styled(MuiCardContent)<CardContentProps>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 0,
    marginLeft: theme.spacing(1),
  })
);

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  textAlign: "left",
  color: theme.palette.grey[600],
}));

export const ControlContainer = styled("div")(({ theme }) => ({
  display: "flex",
}));

export const ControlButton = styled("button")(({ theme }) => ({
  width: "30.44px",
  height: "34px",
  border: "none",
  fontFamily: "'Inter', sans-serif",
  fontStyle: "normal",
  fontSize: "22px",
  fontWeight: 400,
  lineHeight: "16px",
  color: "#eb5757",
  backgroundColor: "#f2f2f2",
}));

export const ControlCounter = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "45.68px",
  border: "2px solid #f2f2f2",
  fontFamily: "'Inter', sans-serif",
  fontStyle: "normal",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "16px",
  color: theme.palette.common.black,
}));

export const Box = styled(MuiBox)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
}));

export const CardActions = styled(MuiCardActions)<CardActionsProps>(
  ({ theme }) => ({
    padding: 0,
  })
);

export const IconButton = styled(MuiIconButton)<IconButtonProps>(
  ({ theme }) => ({
    color: "#bdbdbd",
  })
);
