import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNav from "./src/navigation/TabNav";
import Home from "./src/screens/Home";
import InterestOnboard from "./src/screens/InterestOnboard";
import ProfileOnboard from "./src/screens/ProfileOnboard";
import SignIn from "./src/screens/SignIn";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "./src/screens/Explore";
import Account from "./src/screens/Account";
import { useFonts } from "expo-font";
import PublicStack from "./src/navigation/PublicStack";
import PrivateStack from "./src/navigation/PrivateStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraOptions from "./src/modals/CameraOptions";
import { AuthContext, AuthProvider } from "./src/contexts/AuthContext";
import { useContext } from "react";
import Navigator from "./src/navigation/Navigator";
const Tab = createBottomTabNavigator();
export default function App() {
  const [fontloaded] = useFonts({
    "primary-font": require("./src/assests/fonts/Poppins-Regular.ttf"),
    "logo-font": require("./src/assests/fonts/IndieFlower-Regular.ttf"),
  });
  if (!fontloaded) {
    return null;
  }
  const RootStack = createStackNavigator<RootStackParamList>();

  // const user = {
  //   user_id: "kjaldfjalsdjk",
  //   email_address: "jacksmail@hotmail.com",
  // };

  return (
    <>
      <AuthProvider>
        <NavigationContainer>
          <Navigator/>
          {/* <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: "white",
            },
          }}
        >
          <RootStack.Group>
            <RootStack.Screen name="signIn" component={SignIn} />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{
              animationTypeForReplace: "push",
              animationEnabled: true
            }}
          >
            <RootStack.Screen
              name="profileOnboard"
              component={ProfileOnboard}
            />
            <RootStack.Screen
              name="interestOnboard"
              component={InterestOnboard}
            />
            <RootStack.Screen name="tabNav" component={TabNav} />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{
              presentation: "modal",
            }}
          >
            {/* <RootStack.Screen
              options={{ gestureEnabled: true, gestureResponseDistance: 135 }}
              name="cameraOptions"
              component={CameraOptions}
            /> 
          </RootStack.Group>
        </RootStack.Navigator> */}
        </NavigationContainer>
      </AuthProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
