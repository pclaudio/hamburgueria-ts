import { useState } from "react";
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

const Card = (): JSX.Element => {
  const [isOnFocus, setIsOnFocus] = useState<boolean>(false);

  const handleToggleFocus = (): void => {
    setIsOnFocus(!isOnFocus);
  };

  return (
    <CardContainer>
      <CardFocusButton onFocus={handleToggleFocus} onBlur={handleToggleFocus}>
        <CardMedia
          component="img"
          image="/assets/images/hamburguer.png"
          alt="Hamburguer"
        />

        <CardContent>
          <Title variant="h3">Heading3</Title>

          <Category variant="caption">Caption</Category>

          <Price variant="body2">Body</Price>
        </CardContent>

        <CardActions>
          <AddButton size="medium" focus={isOnFocus}>
            Adicionar
          </AddButton>
        </CardActions>
      </CardFocusButton>
    </CardContainer>
  );
};

export default Card;
