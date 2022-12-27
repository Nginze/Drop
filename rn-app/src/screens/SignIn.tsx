import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useFonts } from "expo-font";
import Divider from "react-native-divider";
import useKeyboardVisible from "../hooks/useKeyboardVisible";
import { useNavigation } from "@react-navigation/native";
import { apiClient } from "../services/ApiClient";
import { storeData } from "../utils/Credentials";
import { AuthContext } from "../contexts/AuthContext";

export interface IProps {}

const ReducedHeader: React.FC<any> = () => {
  return (
    <View className="mb-6 flex-row items-center">
      <Text
        className="w-full text-xl font-bold text-center"
        style={{ fontFamily: "primary-font" }}
      >
        Discover Social Audio Spaces
      </Text>
    </View>
  );
};
const SignIn: React.FC<IProps> = () => {
  const {userData} = useContext(AuthContext)
  const isKeyboardVisible = useKeyboardVisible();
  const [isLoading, setLoading] = useState<Boolean>(false);
  const [emailAddress, setEmailAddress] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const navigation = useNavigation<any>();

  const createAccount = async () => {
    setLoading(true);
    try {
      const { data: accountData, status } = await apiClient.post(
        "/createaccount/",
        {
          emailAddress,
          password,
        }
      );
      setLoading(false);
      console.log("sign in data", accountData);
      if (status === 200) {
        storeData(accountData)
        navigation.navigate("profileOnboard");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const checkAuthStatus = async () => {
    await apiClient.get("/rand", {
      withCredentials: true,
    });
  };
  return (
    <View>
      <View className="w-full h-full flex justify-center px-3 relative">
        {!isKeyboardVisible ? (
          <View className="mb-6">
            <Text className="text-4xl" style={{ fontFamily: "logo-font" }}>
              Drop
            </Text>
            <Text
              className="w-full text-5xl font-bold"
              style={{ fontFamily: "primary-font" }}
            >
              Discover Social
            </Text>
            <Text className="w-full text-5xl font-bold">Audio Spaces</Text>
          </View>
        ) : (
          <ReducedHeader />
        )}
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
            onPress={createAccount}
            className="bg-button-primary py-3 px-2 rounded-lg w-full"
          >
            {!isLoading ? (
              <Text className="text-center text-white font-bold">
                Create Account
              </Text>
            ) : (
              <ActivityIndicator size={"small"} color="#fff" />
            )}
          </TouchableOpacity>
          <Divider orientation="center">or</Divider>
          <TouchableOpacity onPress={() => checkAuthStatus()}>
            <Text className="text-center">Have an account? Login</Text>
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

export default SignIn;
