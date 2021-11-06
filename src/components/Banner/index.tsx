import { times } from "lodash";
import {
  Container,
  Ellipse,
  EllipsesBox,
  EllipsesLine,
  Logo,
  ShoppingBag,
  Text,
  TextBox,
  TextIcon,
  TextStrong,
} from "./styles";

const Banner = (): JSX.Element => {
  const rows = times(6, (index) => <Ellipse key={index} />);

  const lines = times(3, (index) => (
    <EllipsesLine key={index}>{rows}</EllipsesLine>
  ));

  return (
    <Container>
      <Logo src="assets/images/BurguerKenzie.png" alt="Burguer Kenzie" />

      <TextBox>
        <TextIcon>
          <ShoppingBag />
        </TextIcon>

        <Text>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <TextStrong>melhores</TextStrong> ingredientes.
        </Text>
      </TextBox>

      <EllipsesBox>{lines}</EllipsesBox>
    </Container>
  );
};

export default Banner;
