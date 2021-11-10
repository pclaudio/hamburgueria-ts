import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { postLogin, postSignUp } from "../../services/api";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { Cart, Credentials, NodeProps, User } from "../../globalTypes";
import { AuthProviderData, Response } from "./types";
import { useUser } from "../User";
import { useCart } from "../Cart";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: NodeProps): JSX.Element => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState<string>((): string => {
    const token: string = localStorage.getItem("@BK/token") || "";

    const expiration: number =
      (!!token && jwt_decode<JwtPayload>(token).exp) || 0;

    const isExpired = Date.now() >= expiration * 1000;

    if (isExpired) {
      localStorage.removeItem("BK/token");
      localStorage.removeItem("BK/user");
      return "";
    }

    return token;
  });

  const [failMessage, setFailMessage] = useState<string>("");

  const [openBackdrop, setOpenBackdrop] = useState<boolean>(false);

  const { setUser } = useUser();

  const { setCart } = useCart();

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

  const setResponse = (response: Response): void => {
    localStorage.setItem("@BK/token", response.data.accessToken);
    localStorage.setItem("@BK/user", JSON.stringify(response.data.user));
    setAuthToken(response.data.accessToken);
    setUser(response.data.user);

    setOpenBackdrop(false);

    response.data.user.role === "administrador"
      ? history.push("/dashboard")
      : history.push("/shop");
  };

  const setError = (error: Response): void => {
    const message: string = translateMessage(error.response.data);

    setOpenBackdrop(false);

    setFailMessage(message);
  };

  const setLogin = (credentials: Credentials): void => {
    setOpenBackdrop(true);

    postLogin(credentials)
      .then((response: Response) => setResponse(response))
      .catch((error: Response) => setError(error));
  };

  const setLogout = (): void => {
    localStorage.removeItem("@BK/token");
    localStorage.removeItem("@BK/user");
    setAuthToken("");
    setUser({} as User);
    setCart({} as Cart);
    history.push("/");
  };

  const setSignUp = (credentials: Credentials): void => {
    const { name, email, password } = credentials;

    setOpenBackdrop(true);

    postSignUp({ name, email, password, role: "usuario" })
      .then((response: Response) => setResponse(response))
      .catch((error: Response) => setError(error));
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        failMessage,
        setFailMessage,
        openBackdrop,
        setLogin,
        setLogout,
        setSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
