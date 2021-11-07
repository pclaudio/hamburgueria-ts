import { Credentials, User } from "../../globalTypes";
import { Dispatch, SetStateAction } from "react";

export interface AuthProviderData {
  authToken: string;
  failMessage: string;
  setFailMessage: Dispatch<SetStateAction<string>>;
  setLogin: (credentials: Credentials) => void;
  setLogout: () => void;
  setSignUp: (credentials: Credentials) => void;
}

export interface Response {
  data: {
    accessToken: string;
    user: User;
  };
  response: {
    data: string;
  };
  status: number;
}
