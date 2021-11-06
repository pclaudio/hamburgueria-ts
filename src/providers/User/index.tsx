import { createContext, useContext, useState } from "react";
import { NodeProps, User } from "../../globalTypes";
import { UserProviderData } from "./types";

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: NodeProps): JSX.Element => {
  const [user, setUser] = useState<User>({} as User);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
