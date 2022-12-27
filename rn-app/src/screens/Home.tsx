import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Roomcard from "../components/Roomcard";

interface IProps {}
const Data = [{}, {}, {}, {}, {}, {}, {}, {}];
const Home: React.FC<IProps> = () => {
  return (
    <SafeAreaView className="w-full mt-4 flex-column justify-center px-3">
      <FlatList
        ListHeaderComponent={() => (
          <Text className="font-semibold  py-5">Live around Drop</Text>
        )}
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={() => <Roomcard />}
      />
    </SafeAreaView>
  );
};

export default Home;
