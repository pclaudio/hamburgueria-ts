import { useState } from "react";
import { useCart } from "../../providers/Cart";
import currencyFormatter from "../../utils/currencyFormatter";
import {
  AddButton,
  CardActions,
  CardContainer,
  CardContent,
  CardFocusButton,
  CardMedia,
  Category,
  Price,
  Title,
} from "./styles";
import { CardProps } from "./types";

const Card = ({ product }: CardProps): JSX.Element => {
  const { addProductToCart } = useCart();

  const [isOnFocus, setIsOnFocus] = useState<boolean>(false);

  const image: string = `/assets/images/${product.category}.png`;

  const handleToggleFocus = (): void => {
    setIsOnFocus(!isOnFocus);
  };

  const handleAddProduct = () => {
    addProductToCart({ ...product, quantity: 1 });
  };

  return (
    <CardContainer>
      <CardFocusButton onFocus={handleToggleFocus} onBlur={handleToggleFocus}>
        <CardMedia component="img" image={image} alt="Hamburguer" />

        <CardContent>
          <Title variant="h3">{product.title}</Title>

          <Category variant="caption">{product.category}</Category>

          <Price variant="body2">{currencyFormatter(product.price)}</Price>
        </CardContent>

        <CardActions>
          <AddButton size="medium" focus={isOnFocus} onClick={handleAddProduct}>
            Adicionar
          </AddButton>
        </CardActions>
      </CardFocusButton>
    </CardContainer>
  );
};

export default Card;
