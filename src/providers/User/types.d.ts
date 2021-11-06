import { User } from "../../globalTypes";

export interface UserProviderData {
  user: User;
  setUser: (user: User) => void;
}
