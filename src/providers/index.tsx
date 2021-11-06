import { NodeProps } from "../globalTypes";
import { AuthProvider } from "./Auth";
import { UserProvider } from "./User";

const Providers = ({ children }: NodeProps): JSX.Element => {
  return (
    <UserProvider>
      <AuthProvider>{children}</AuthProvider>
    </UserProvider>
  );
};

export default Providers;
