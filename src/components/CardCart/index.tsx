import { Delete } from "@mui/icons-material";
import { CardCartProps } from "./types";
import { useCart } from "../../providers/Cart";
import { CardMedia } from "@mui/material";
import {
  Box,
  CardActions,
  CardContainer,
  CardContent,
  CardMediaRoot,
  ControlButton,
  ControlContainer,
  ControlCounter,
  IconButton,
  Title,
} from "./styles";

const CardCart = ({ product }: CardCartProps): JSX.Element => {
  const image: string = `/assets/images/${product.category}.png`;

  const {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProductFromCart,
  } = useCart();

  return (
    <CardContainer>
      <CardMediaRoot>
        <CardMedia component="img" image={image} alt="Kenzie Burguer Product" />
      </CardMediaRoot>

      <CardContent>
        <Title variant="h3">{product.title}</Title>

        <ControlContainer>
          <ControlButton onClick={() => decreaseProductQuantity(product.id)}>
            -
          </ControlButton>
          <ControlCounter>{product.quantity}</ControlCounter>
          <ControlButton onClick={() => increaseProductQuantity(product.id)}>
            +
          </ControlButton>
        </ControlContainer>
      </CardContent>

      <Box />

      <CardActions>
        <IconButton
          size="large"
          onClick={() => removeProductFromCart(product.id)}
        >
          <Delete fontSize="medium" />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

export default CardCart;
