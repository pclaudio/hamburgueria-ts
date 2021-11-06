import { Delete } from "@mui/icons-material";
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

const CardCart = (): JSX.Element => {
  return (
    <CardContainer>
      <CardMediaRoot>
        <CardMedia
          component="img"
          image="/assets/images/hamburguer.png"
          alt="Hamburguer"
        />
      </CardMediaRoot>

      <CardContent>
        <Title variant="h3">Heading3</Title>

        <ControlContainer>
          <ControlButton>-</ControlButton>
          <ControlCounter>1</ControlCounter>
          <ControlButton>+</ControlButton>
        </ControlContainer>
      </CardContent>

      <Box />

      <CardActions>
        <IconButton size="large">
          <Delete fontSize="medium" />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

export default CardCart;
