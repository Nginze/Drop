import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Explore from "../screens/Explore";
import Account from "../screens/Account";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Favourites from "../screens/Favourites";

const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        screenOptions={({ route }) => ({
          headerLeft: () => (
            <Text className="text-2xl px-3" style={{ fontFamily: "logo-font" }}>
              Drop
            </Text>
          ),
          headerRight: () => (
            <View className="flex-row w-1/3 items-center justify-evenly">
              <Ionicons name="notifications-outline" size={24} />
              <Ionicons name="chatbox-outline" size={24} />
            </View>
          ),
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Explore") {
              iconName = focused ? "compass" : "compass-outline";
            } else if (route.name === "Account") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name == "Favourites") {
              iconName = focused ? "bookmark" : "bookmark-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerTitle: "",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { height: 60 },
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Favourites" component={Favourites} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
  );
};

export default TabNav;
