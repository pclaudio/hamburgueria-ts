import { NodeProps } from "../globalTypes";
import { AuthProvider } from "./Auth";
import { CartProvider } from "./Cart";
import { ControlsProvider } from "./Controls";
import { ProductsProvider } from "./Products";
import { UserProvider } from "./User";

const Providers = ({ children }: NodeProps): JSX.Element => {
  return (
    <UserProvider>
      <CartProvider>
        <AuthProvider>
          <ProductsProvider>
            <ControlsProvider>{children}</ControlsProvider>
          </ProductsProvider>
        </AuthProvider>
      </CartProvider>
    </UserProvider>
  );
};

export default Providers;
