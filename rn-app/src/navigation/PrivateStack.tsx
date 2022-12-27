import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import ProfileOnboard from "../screens/ProfileOnboard";
import InterestOnboard from "../screens/InterestOnboard";
import TabNav from "./TabNav";
import { NavigationContainer } from "@react-navigation/native";

type Props = {};

const Stack = createNativeStackNavigator();
const PrivateStack = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          contentStyle: { backgroundColor: "transparent" },
          headerShown: false,
        }}
      >
        <Stack.Screen name="profileOnboard" component={ProfileOnboard} />
        <Stack.Screen name="interestOnboard" component={InterestOnboard} />
        <Stack.Screen name="tabNav" component={TabNav} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default PrivateStack;
