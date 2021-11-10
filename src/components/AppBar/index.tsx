import { FaSearch, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../providers/Auth";
import { useCart } from "../../providers/Cart";
import { useControls } from "../../providers/Controls";
import {
  Badge,
  Box,
  IconButton,
  Img,
  MuiAppBar,
  SearchBox,
  Space,
  Toolbar,
} from "./styles";

const AppBar = (): JSX.Element => {
  const { setLogout } = useAuth();

  const { cart, handleToggleCart } = useCart();

  const { showControls, handleToggleControls } = useControls();

  const handleLogout = (): void => {
    setLogout();
  };

  return (
    <Box>
      <MuiAppBar position="static">
        <Toolbar>
          <Img
            src="/assets/images/BurguerKenzie.png"
            alt="Burguer Kenzie"
            showcontrols={showControls}
          />

          <Space showcontrols={showControls} />

          <SearchBox fullWidth type="searchBox" showcontrols={showControls} />

          <IconButton
            hidden
            onClick={handleToggleControls}
            showcontrols={showControls}
          >
            <FaSearch />
          </IconButton>

          <IconButton showcontrols={showControls} onClick={handleToggleCart}>
            <Badge
              showZero
              color="primary"
              badgeContent={cart?.products ? cart.products.length : 0}
            >
              <FaShoppingCart />
            </Badge>
          </IconButton>

          <IconButton onClick={handleLogout} showcontrols={showControls}>
            <FaSignOutAlt />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
