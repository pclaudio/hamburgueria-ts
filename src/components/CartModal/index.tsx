import { useCart } from "../../providers/Cart";
import currencyFormatter from "../../utils/currencyFormatter";
import { MdClose } from "react-icons/md";
import CardCart from "../CardCart";
import Button from "../Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Message,
  SubMessage,
  TotalContainer,
  TotalSum,
  TotalText,
} from "./styles";

const CartModal = (): JSX.Element => {
  const { cart, openCart, handleToggleCart, removeAllProductsFromCart } =
    useCart();

  const prices =
    cart.products !== undefined
      ? cart.products.map((product) => product.quantity * product.price)
      : [];

  const total =
    prices.length > 0
      ? prices.reduce(
          (previousValue, currentValue) => previousValue + currentValue
        )
      : 0;

  return (
    <>
      <Dialog open={openCart} onClose={handleToggleCart}>
        <DialogTitle>{"Carrinho de compras"}</DialogTitle>

        <IconButton onClick={handleToggleCart}>
          <MdClose />
        </IconButton>

        {cart.products === undefined || cart.products.length === 0 ? (
          <DialogContent>
            <Message variant="h3">Sua sacola está vazia</Message>
            <SubMessage variant="body1">Adicione itens</SubMessage>
          </DialogContent>
        ) : (
          <>
            <DialogContent>
              {cart.products.map((product) => (
                <CardCart key={product.id} product={product} />
              ))}

              <Divider />

              <TotalContainer>
                <TotalText variant="body2">Total</TotalText>
                <TotalSum variant="body2">{currencyFormatter(total)}</TotalSum>
              </TotalContainer>
            </DialogContent>

            <DialogActions>
              <Button
                fullWidth
                color="secondary"
                onClick={removeAllProductsFromCart}
              >
                Remover todos
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default CartModal;
