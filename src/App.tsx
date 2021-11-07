import "@fontsource/inter";
import theme from "./theme";
import {
  Backdrop,
  CircularProgress,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Routes from "./routes";
import { useAuth } from "./providers/Auth";

const App = (): JSX.Element => {
  const { openBackdrop } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes />

      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={openBackdrop}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </ThemeProvider>
  );
};

export default App;
