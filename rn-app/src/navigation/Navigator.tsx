import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import PrivateStack from "./PrivateStack";
import PublicStack from "./PublicStack";
import { removeData } from "../utils/Credentials";
import Splash from "../screens/Splash";

type Props = {};

const Navigator = (props: Props) => {
  const { userData, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Splash />;
  }
  return <>{userData ? <PrivateStack /> : <PublicStack />}</>;
};

export default Navigator;
