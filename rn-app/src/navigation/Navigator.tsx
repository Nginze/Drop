import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import PrivateStack from "./PrivateStack";
import PublicStack from "./PublicStack";
PublicStack;

type Props = {};

const Navigator = (props: Props) => {
  const { userData } = useContext(AuthContext);
  console.log("user data from navigator", userData);
  return <>{userData ? <PrivateStack /> : <PublicStack />}</>;
};

export default Navigator;
