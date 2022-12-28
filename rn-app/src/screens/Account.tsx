import { View, Text } from "react-native";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { removeData } from "../utils/Credentials";
import { AuthContext } from "../contexts/AuthContext";

type Props = {};

const Account = (props: Props) => {
  const { actionToggle, setToggle } = useContext(AuthContext);
  return (
    <View className="flex h-full items-center justify-center">
      <TouchableOpacity
        onPress={async () => {
          await removeData();
          setToggle(!actionToggle);
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;
