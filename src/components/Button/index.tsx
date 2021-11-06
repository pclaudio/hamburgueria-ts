import { ButtonProps } from "@mui/material";
import { StyledButton } from "./styles";

const Button = ({
  size = "large",
  color = "primary",
  children,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton size={size} color={color} {...rest} variant="contained">
      {children}
    </StyledButton>
  );
};

export default Button;
