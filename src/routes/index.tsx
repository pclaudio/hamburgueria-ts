import { Switch } from "react-router-dom";
import Route from "./route";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Shop from "../pages/Shop";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>

      <Route path="/dashboard" isPrivate>
        <Dashboard />
      </Route>

      <Route path="/shop" isPrivate>
        <Shop />
      </Route>
    </Switch>
  );
};

export default Routes;
