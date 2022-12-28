import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import RoomSheet from "../modals/RoomSheet";
interface IProps {}

const Roomcard: React.FC<IProps> = () => {
  const navigation = useNavigation<any>();
  return (
    <>
      <TouchableWithoutFeedback onPress={() => {}}>
        <View className="bg-box-bg px-4 py-3 mb-4 w-full rounded-2xl ">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Image
                className="w-5 h-5  mr-1 rounded-lg"
                source={{
                  uri: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk0NTYyNjM2NzE1NjY1MDA2/lionel-messi-world-cup-trophy.jpg",
                }}
              />
              <Text
                className="font-semibold text-md text-text-light"
                style={{ fontFamily: "primary-font-semibold" }}
              >
                THE SMOKE&GEMS
              </Text>
            </View>
            <Ionicons name="ellipsis-vertical" size={14} />
          </View>
          <View className="mb-2">
            <Text
              className="font-semibold text-lg"
              style={{ fontFamily: "primary-font-semibold" }}
            >
              Where my people at?? Check it oooouuuut
            </Text>
          </View>
          <View className="flex-row items-start">
            <View className="relative mr-10">
              <Image
                className="w-11 h-11 rounded-2xl"
                source={{
                  uri: "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&w=1000&q=80",
                }}
              />
              <Image
                className="w-11 h-11 rounded-2xl absolute mt-4 ml-7 -z-10"
                source={{
                  uri: "https://www.the-sun.com/wp-content/uploads/sites/6/2022/12/lionel-messi-argentina-celebrates-win-781813939-2.jpg?strip=all&quality=100&w=1920&h=1440&crop=1",
                }}
              />
            </View>
            <View>
              <View className="mb-2">
                <Text
                  className="text-xl flex-row items-start"
                  style={{ fontFamily: "primary-font" }}
                >
                  LOUSY
                  <Text> 💬</Text>
                </Text>
                <Text
                  className=" text-xl flex-row items-start"
                  style={{ fontFamily: "primary-font" }}
                >
                  LilGoat Savage
                  <Text> 💬</Text>
                </Text>
                <Text
                  className=" text-xl flex-row items-start"
                  style={{ fontFamily: "primary-font" }}
                >
                  Bort
                  <Text> 💬</Text>
                </Text>
              </View>
              <View className="flex-row items-center">
                <View className="flex-row items-center mr-4">
                  <Ionicons name="person-outline" size={18} />
                  <Text className="ml-1 font-semibold">16</Text>
                </View>
                <View className="flex-row items-center">
                  <Ionicons name="chatbubble-ellipses-outline" size={18} />
                  <Text className="ml-1 font-semibold">12</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

    </>
  );
};

export default Roomcard;
