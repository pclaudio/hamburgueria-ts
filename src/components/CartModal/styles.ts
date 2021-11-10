import { styled } from "@mui/material/styles";
import {
  Dialog as MuiDialog,
  DialogActions as MuiDialogActions,
  DialogActionsProps,
  DialogContent as MuiDialogContent,
  DialogContentProps,
  DialogProps,
  DialogTitle as MuiDialogTitle,
  DialogTitleProps,
  Divider as MuiDivider,
  DividerProps,
  IconButton as MuiIconButton,
  IconButtonProps,
  Typography,
  TypographyProps,
} from "@mui/material";

export const Dialog = styled(MuiDialog)<DialogProps>(({ theme }) => ({
  "&.MuiModal-root": {
    top: theme.spacing(6),
    bottom: "unset",
  },

  ".MuiDialog-paper": {
    borderRadius: "5px",
    margin: `${theme.spacing(4)} ${theme.spacing(2)}`,
    width: "100%",
    maxWidth: "500px",
    minHeight: "212px",
  },
}));

export const DialogTitle = styled(MuiDialogTitle)<DialogTitleProps>(
  ({ theme }) => ({
    height: "54px",
    padding: "13px 22px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontFamily: "'Inter', sans-serif",
    fontStyle: "normal",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "28px",
  })
);

export const IconButton = styled(MuiIconButton)<IconButtonProps>(
  ({ theme }) => ({
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(2),
    color: theme.palette.primary.contrastText,
    fontFamily: "'Inter', sans-serif",
    fontStyle: "normal",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "28px",
  })
);

export const DialogContent = styled(MuiDialogContent)<DialogContentProps>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  })
);

export const Message = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.grey[600],
  textAlign: "center",
  marginBottom: "15px",
}));

export const SubMessage = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.grey[300],
  textAlign: "center",
}));

export const Divider = styled(MuiDivider)<DividerProps>(({ theme }) => ({
  borderWidth: "1px",
  borderColor: theme.palette.grey[100],
}));

export const TotalContainer = styled("div")(({ theme }) => ({
  display: "fkex",
  justifyContent: "space-between",
  padding: `${theme.spacing(2)} 0 0 0`,
}));

export const TotalText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.grey[600],
}));

export const TotalSum = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.grey[300],
}));

export const DialogActions = styled(MuiDialogActions)<DialogActionsProps>(
  ({ theme }) => ({
    padding: theme.spacing(2),
    paddingTop: theme.spacing(1),
  })
);
