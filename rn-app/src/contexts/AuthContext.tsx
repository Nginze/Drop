import React, { createContext, useContext, useState, useEffect } from "react";
import { userData } from "../types/UserData";
import { getData } from "../utils/Credentials";

type Props = {
  children: React.ReactNode;
};
interface Context {
  userData:
    | { user_id: string; email_address: string; password_hash?: string }
    | undefined;
}

export const AuthContext = createContext<Context>({} as Context);

export const AuthProvider = ({ children }: Props) => {
  const [me, setMe] = useState<userData | undefined>();
  useEffect(() => {
    getData().then(_me => {
      setMe(_me);
      console.log(_me);
    });
  }, []);
  const authContext: Context = {
    userData: me,
  };
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
