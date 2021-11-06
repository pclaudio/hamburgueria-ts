import { Search } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment as MuiInputAdornment,
  TextFieldProps,
} from "@mui/material";
import { StyledTextField } from "./styles";

const InputAdornment = (): JSX.Element => {
  return (
    <MuiInputAdornment position="end">
      <IconButton>
        <Search />
      </IconButton>
    </MuiInputAdornment>
  );
};

const TextField = ({ type = "text", ...rest }: TextFieldProps): JSX.Element => {
  const inputProps =
    type === "searchBox" ? { endAdornment: <InputAdornment /> } : {};

  return (
    <StyledTextField
      type={type}
      {...rest}
      InputProps={inputProps}
      variant="outlined"
    />
  );
};

export default TextField;
