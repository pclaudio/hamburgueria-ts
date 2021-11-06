import "@fontsource/inter";
import theme from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Routes from "./routes";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes />
    </ThemeProvider>
  );
};

export default App;
