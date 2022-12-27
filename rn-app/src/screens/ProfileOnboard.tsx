import Ionicons from "@expo/vector-icons/Ionicons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CameraOptions from "../modals/CameraOptions";
import { apiClient } from "../services/ApiClient";

interface IProps {}

const ProfileOnboard: React.FC<IProps> = () => {
  const route = useRoute<RouteProp<RootStackParamList, "profileOnboard">>();
  const { accountData } = route.params;
  const [isLoading, setLoading] = useState<Boolean>(false);
  const hasPhoto = false;
  const hasletterRequirement = false;
  const navigation = useNavigation<any>();
  const [profilePhoto, setPhoto] = useState<string | null>(null);
  const [profileUsername, setUsername] = useState<string | undefined>("");
  const [showCameraOptions, setShowCameraOptions] = useState<Boolean>(false);
  const [usernameIsAvailble, setAvailablity] = useState<Boolean>(false);
  const [hasRequiredLength, setHasRequiredLength] = useState<Boolean>(false);
  const [hasRequiredFormat, setHasRequiredFormat] = useState<Boolean>(false);
  useEffect(() => console.log(accountData), []);
  const onboardProfile = async () => {
    setLoading(true);
    try {
      const { data, status } = await apiClient.post(
        "/createaccount/profileonboard/",
        {
          profileUsername,
          profilePhoto,
          user_id: accountData.user_id,
        }
      );
      setLoading(false);
      console.log("sign in data", data);
      if (status === 200) {
        navigation.navigate("interestOnboard", { accountData });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const checkUsernameAvailability = (): Boolean => {
    return false;
  };
  const checkRequiredLength = (): Boolean => {
    if (profileUsername) {
      return profileUsername.length >= 4 && profileUsername.length <= 16;
    }
    return false;
  };
  const checkRequiredFormat = (): Boolean => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (profileUsername) {
      return !specialChars.test(profileUsername);
    }
    return false;
  };
  const checkCameraPermissions = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You refused access to your camera!");
      return false;
    }
    return true;
  };
  const checkMediaLibraryPermissions = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You refused access to your camera!");
      return false;
    }
    return true;
  };

  const launchCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      base64: true,
      aspect: [3, 4],
      quality: 1,
    });
    if (result.assets != null) {
      setPhoto(`data:image/jpeg;base64,${result.assets[0].base64}`);
      setShowCameraOptions(false);
    }
  };
  const launchMediaLibrary = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      base64: true,
      aspect: [3, 4],
      quality: 1,
    });
    if (result.assets != null) {
      setPhoto(`data:image/jpeg;base64,${result.assets[0].base64}`);
      setShowCameraOptions(false);
    }
  };
  useEffect(() => {
    setAvailablity(checkUsernameAvailability());
    setHasRequiredLength(checkRequiredLength());
    setHasRequiredFormat(checkRequiredFormat());
  }, [profileUsername]);

  useEffect(() => {
    checkCameraPermissions();
    checkMediaLibraryPermissions();
  }, []);
  return (
    <>
      <View className="w-full h-full flex justify-center mt-4 px-3 relative">
        <View className="absolute top-10 w-full">
          <Text className="text-center text-lg font-semibold">
            Complete your profile
          </Text>
        </View>
        <View>
          <View className="flex-row items-center bg-box-bg px-3 py-2 rounded-lg mb-6">
            <TouchableOpacity
              onPress={() => setShowCameraOptions(true)}
              className="flex items-center justify-center bg-text-light w-14 h-14 mr-3 rounded-full"
            >
              {profilePhoto ? (
                <Image
                  source={{
                    uri: profilePhoto,
                  }}
                  className="w-full h-full rounded-full"
                />
              ) : (
                <Ionicons name="camera" size={24} color="white" />
              )}
            </TouchableOpacity>
            <View>
              <Text className="font-bold">
                {profileUsername ? profileUsername : "username"}
              </Text>
              <Text>username@gmail.com</Text>
            </View>
          </View>
          <View>
            <TextInput
              onChangeText={value => setUsername(value)}
              className="bg-box-bg py-3 px-2 rounded-md mb-6 w-full"
              placeholder="Type a username"
            />
          </View>
          <View className="w-full mb-6">
            <View className="flex-row items-center mb-2">
              {usernameIsAvailble ? (
                <Ionicons name="md-checkmark-circle" size={20} color="green" />
              ) : (
                <Ionicons name="close-circle" size={20} color={"red"} />
              )}
              <Text className="ml-2">Username is Available</Text>
            </View>
            <View className="flex-row items-center mb-2">
              {hasRequiredLength ? (
                <Ionicons name="md-checkmark-circle" size={20} color="green" />
              ) : (
                <Ionicons name="close-circle" size={20} color={"red"} />
              )}
              <Text className="ml-2">Must be between 4-16 Characters</Text>
            </View>
            <View className="flex-row items-center mb-2">
              {hasRequiredFormat ? (
                <Ionicons name="md-checkmark-circle" size={20} color="green" />
              ) : (
                <Ionicons name="close-circle" size={20} color={"red"} />
              )}
              <Text className="ml-2">
                Letters and Numbers. No special characters
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => onboardProfile()}
              className="bg-button-primary py-3 px-2 rounded-lg w-full"
            >
              {!isLoading ? (
                <Text className="text-center text-white font-bold">Next</Text>
              ) : (
                <ActivityIndicator size={"small"} color="#fff" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {showCameraOptions && (
        <CameraOptions
          launchCamera={launchCamera}
          launchMediaLibrary={launchMediaLibrary}
          setShowCameraOptions={setShowCameraOptions}
        />
      )}
    </>
  );
};

export default ProfileOnboard;
