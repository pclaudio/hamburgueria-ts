import AppBar from "../../components/AppBar";
import Products from "../../components/Products";
import CartModal from "../../components/CartModal";

const Shop = (): JSX.Element => {
  return (
    <>
      <AppBar />

      <Products />

      <CartModal />
    </>
  );
};

export default Shop;
