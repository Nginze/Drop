import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";

type Props = {};
const Stack = createNativeStackNavigator();
const PublicStack = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          contentStyle: { backgroundColor: "transparent" },
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="signIn" component={SignIn} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default PublicStack;
