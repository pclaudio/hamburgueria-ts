import { ChangeEvent } from "react";
import { useProducts } from "../../providers/Products";
import { Search } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment as MuiInputAdornment,
  TextFieldProps,
} from "@mui/material";
import { StyledTextField } from "./styles";
import { useControls } from "../../providers/Controls";

const InputAdornment = (): JSX.Element => {
  const { handleToggleControls } = useControls();

  return (
    <MuiInputAdornment position="end">
      <IconButton onClick={handleToggleControls}>
        <Search />
      </IconButton>
    </MuiInputAdornment>
  );
};

const TextField = ({
  type = "text",
  onChange = undefined,
  ...rest
}: TextFieldProps): JSX.Element => {
  const inputProps =
    type === "searchBox" ? { endAdornment: <InputAdornment /> } : {};

  const { setTerm } = useProducts();

  const handleSearchByTerm = (event: ChangeEvent<HTMLInputElement>): void => {
    setTerm(event.target.value);
  };

  return (
    <StyledTextField
      type={type}
      onChange={onChange === undefined ? handleSearchByTerm : onChange}
      {...rest}
      InputProps={inputProps}
      variant="outlined"
    />
  );
};

export default TextField;
