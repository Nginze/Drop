import React, { createContext, useContext, useState, useEffect } from "react";
import { userData } from "../types/UserData";
import { getData, removeData, storeData } from "../utils/Credentials";

type Props = {
  children: React.ReactNode;
};
interface Context {
  userData: userData | undefined;
  setToggle: (value: Boolean) => void;
  actionToggle: Boolean;
  isLoading: Boolean;
}

export const AuthContext = createContext<Context>({} as Context);

export const AuthProvider = ({ children }: Props) => {
  const [me, setMe] = useState<userData | undefined>();
  const [actionToggle, setToggle] = useState<Boolean>(false);
  const [isLoading, setLoading] = useState<Boolean>(false)
  useEffect(() => {
    setLoading(true)
    getData().then(_me => {
      setMe(_me);
      setLoading(false)
    });
  }, [actionToggle]);
  const authContext: Context = {
    userData: me,
    setToggle,
    actionToggle,
    isLoading
  };
  // removeData()
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
