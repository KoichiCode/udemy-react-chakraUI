import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState
} from "react";

import { User } from "../types/api/user";

type LoginUser = User & { isAdmin: boolean };

export type LoginuserContextType = {
  LoginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginuserContextType>(
  {} as LoginuserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [LoginUser, setLoginUser] = useState<User | null>(null);

  return (
    <LoginUserContext.Provider value={{ LoginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
