import { View, Text } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import ProfileOnboard from "../screens/ProfileOnboard";
import InterestOnboard from "../screens/InterestOnboard";
import TabNav from "./TabNav";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthContext";
import RoomSheet from "../modals/RoomSheet";
import BottomSheets from "./BottomSheets";

type Props = {};

const Stack = createNativeStackNavigator();
const PrivateStack = (props: Props) => {
  const { userData } = useContext(AuthContext);
  console.log(userData?.username);
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          contentStyle: { backgroundColor: "transparent" },
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        {!userData?.username && (
          <Stack.Group>
            <Stack.Screen name="profileOnboard" component={ProfileOnboard} />
            <Stack.Screen name="interestOnboard" component={InterestOnboard} />
          </Stack.Group>
        )}

        <Stack.Screen name="tabNav" component={TabNav} />
      </Stack.Group>
      
      <Stack.Group
        screenOptions={{
          presentation: "transparentModal",
          contentStyle: { backgroundColor: "transparent" },
          headerShown: false,
          animation: "slide_from_bottom",
          gestureEnabled: true,
        }}
      >
        <Stack.Screen  name="roomSheet" component={RoomSheet} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default PrivateStack;
