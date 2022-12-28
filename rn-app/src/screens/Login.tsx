import { View, Text, ActivityIndicator, TouchableOpacity, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import useKeyboardVisible from "../hooks/useKeyboardVisible";
import { apiClient } from "../services/ApiClient";
import { storeData } from "../utils/Credentials";
import { AuthContext } from "../contexts/AuthContext";

type Props = {};

const Login = (props: Props) => {
  const { userData, setToggle, actionToggle } = useContext(AuthContext);
  const isKeyboardVisible = useKeyboardVisible();
  const [isLoading, setLoading] = useState<Boolean>(false);
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const login = async () => {
    setLoading(true);
    try {
      const { data: accountData, status } = await apiClient.post(
        "/auth/",
        {
          emailAddress,
          password,
        }
      );
      setLoading(false);
      if (status === 200) {
        await storeData(accountData.user);
        setToggle(!actionToggle);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <View className="w-full h-full flex justify-center px-3 relative">
        <View className="mb-6">
          <Text className="w-full text-5xl font-bold">
            Login to your Account
          </Text>
        </View>
        <View className="w-full">
          <TextInput
            placeholder="Email Address"
            className="bg-box-bg py-3 px-2 rounded-md mb-6 w-full"
            onChangeText={value => setEmailAddress(value)}
          />
          <TextInput
            placeholder="Password"
            className="bg-box-bg py-3 px-2 rounded-md mb-6 w-full"
            secureTextEntry
            onChangeText={value => setPassword(value)}
          />
          <TouchableOpacity
            onPress={login}
            className="bg-button-primary py-3 px-2 rounded-lg w-full"
          >
            {!isLoading ? (
              <Text className="text-center text-white font-bold">Sign In</Text>
            ) : (
              <ActivityIndicator size={"small"} color="#fff" />
            )}
          </TouchableOpacity>
        </View>
        {!isKeyboardVisible && (
          <View className="absolute bottom-3 self-center ">
            <Text className="text-center text-xs text-text-light">
              By continuing you agree to our Terms of Service and Privacy Policy
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Login;
