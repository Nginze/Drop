import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

type Props = {};

const Splash = (props: Props) => {
  return (
    <View className="h-full w-full flex items-center justify-center">
      <ActivityIndicator  size={50} color={"blue"} />
    </View>
  );
};

export default Splash;
