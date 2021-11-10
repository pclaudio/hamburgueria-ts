import { useProducts } from "../../providers/Products";
import { Product } from "../../globalTypes";
import Card from "../Card";
import { Box, Container, GridContainer, GridItem, Message } from "./styles";

const Products = (): JSX.Element => {
  const { getProductsByTerm } = useProducts();

  const products = getProductsByTerm();

  return (
    <Container disableGutters maxWidth={false}>
      <Box>
        {products.length > 0 ? (
          <GridContainer container spacing={1}>
            {products
              .filter((product) => product.category === "hamburgueres")
              .map((product: Product) => (
                <GridItem item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Card product={product} />
                </GridItem>
              ))}

            {products
              .filter((product) => product.category === "bebidas")
              .map((product: Product) => (
                <GridItem item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Card product={product} />
                </GridItem>
              ))}

            {products
              .filter((product) => product.category === "acompanhamentos")
              .map((product: Product) => (
                <GridItem item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Card product={product} />
                </GridItem>
              ))}

            {products
              .filter((product) => product.category === "sobremesas")
              .map((product: Product) => (
                <GridItem item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Card product={product} />
                </GridItem>
              ))}
          </GridContainer>
        ) : (
          <Message variant="h2">
            Ops! Nenhum produto encontrado com o termo pesquisado.
          </Message>
        )}
      </Box>
    </Container>
  );
};

export default Products;
