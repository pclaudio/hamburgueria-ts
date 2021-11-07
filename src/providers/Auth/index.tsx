import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { postLogin } from "../../services/api";
import { Credentials, NodeProps, User } from "../../globalTypes";
import { AuthProviderData, Response } from "./types";
import { useUser } from "../User";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: NodeProps): JSX.Element => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState<string>(
    (): string => localStorage.getItem("@BK/token") || ""
  );

  const [failMessage, setFailMessage] = useState<string>("");

  const { setUser } = useUser();

  const translateMessage = (origianlMessage: string): string => {
    let translatedMessage = "";

    switch (origianlMessage) {
      case "Cannot find user":
        translatedMessage = "Usuário não localizado.";
        break;

      case "Incorrect password":
        translatedMessage = "Senha incorreta.";
        break;

      case "Password is too short":
        translatedMessage = "A senha é muito curta.";
        break;

      default:
        translatedMessage = origianlMessage;
        break;
    }

    return translatedMessage;
  };

  const setLogin = (credentials: Credentials): void => {
    postLogin(credentials)
      .then((response: Response) => {
        localStorage.setItem("@BK/token", response.data.accessToken);
        localStorage.setItem("@BK/user", JSON.stringify(response.data.user));
        setAuthToken(response.data.accessToken);
        setUser(response.data.user);
        response.data.user.role === "administrador"
          ? history.push("/dashboard")
          : history.push("/shop");
      })
      .catch((error: Response) => {
        const message: string = translateMessage(error.response.data);
        setFailMessage(message);
      });
  };

  const setLogout = (): void => {
    localStorage.removeItem("@BK/token");
    localStorage.removeItem("@BK/user");
    setAuthToken("");
    setUser({} as User);
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ authToken, failMessage, setFailMessage, setLogin, setLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
