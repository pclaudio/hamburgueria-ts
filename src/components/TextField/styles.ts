import { styled } from "@mui/material/styles";
import { TextField, TextFieldProps } from "@mui/material";

export const StyledTextField = styled(TextField)<TextFieldProps>(
  ({ type, theme }) => ({
    ".MuiOutlinedInput-root": {
      height: "60px",
      paddingRight: "10px",

      ...(type === "searchBox"
        ? { backgroundColor: theme.palette.common.white }
        : { backgroundColor: theme.palette.grey[50] }),

      "&.Mui-focused": {
        backgroundColor: theme.palette.common.white,

        ".MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.grey[600],
        },
      },

      "&.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.error.main,
      },
    },

    ".MuiInputAdornment-root": {
      height: "unset",
      marginLeft: "5px",

      ".MuiButtonBase-root": {
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.shape.borderRadius,
        padding: "8px 15px",
      },

      ".MuiSvgIcon-root": {
        fill: theme.palette.background.default,
      },
    },

    ".MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",

      ...(type === "searchBox"
        ? { borderColor: theme.palette.grey[100] }
        : { borderColor: theme.palette.grey[50] }),
    },

    ".MuiOutlinedInput-input": {
      paddingRight: "5px",
      paddingLeft: "15px",

      "&:focus::placeholder": {
        color: theme.palette.grey[300],
        opacity: 1,
      },
    },

    ".MuiFormLabel-root.MuiInputLabel-root, .MuiInputBase-input.MuiOutlinedInput-input":
      { fontSize: "16px", lineHeight: "19.36px" },

    ".MuiFormLabel-root.MuiInputLabel-root": {
      top: "5px",
      color: theme.palette.grey[200],

      "&.MuiInputLabel-shrink": {
        top: "0",
      },
    },
  })
);
