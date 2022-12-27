import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import { NavigationContainer } from "@react-navigation/native";

type Props = {};
const Stack = createNativeStackNavigator();
const PublicStack = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="signIn" component={SignIn} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default PublicStack;
