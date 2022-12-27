import {
  View,
  Text,
  SectionList,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import InterestSelect from "../components/InterestSelect";
import interestOptions from "../constants/InterestOptions";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectGrid from "../components/SelectGrid";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useSelectedInterests } from "../store/useSelectedInterests";
import { apiClient } from "../services/ApiClient";
import { AuthContext } from "../contexts/AuthContext";

type Props = {};

const InterestOnboard = (props: Props) => {
  // const route = useRoute<RouteProp<RootStackParamList, "interestOnboard">>();
  // const {
  //   accountData: { user_id },
  // } = route.params;
  const {userData} = useContext(AuthContext)
  const [isLoading, setLoading] = useState<Boolean>(false);
  const navigation = useNavigation<any>();
  const selectedInterests = useSelectedInterests(
    state => state.selectedInterests
  );
  const formattedInterests = selectedInterests.map(item => [userData?.user_id, item]);
  const onboardInterests = async () => {
    setLoading(true);
    try {
      const { data, status } = await apiClient.post(
        "/createaccount/interestonboard/",
        {
          interests: formattedInterests,
        }
      );
      setLoading(false);
      console.log("sign in data", data);
      if (status === 200) {
        navigation.navigate("tabNav");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeAreaView>
      <View className="w-full mt-4 h-full flex-column justify-center px-3">
        <View className="flex-column items-center w-full">
          <Text className="text-center text-lg mb-3 font-semibold">
            Select your Interests
          </Text>
          <Text className="text-center w-3/5 mb-6">
            Add your interests so we can personalize Drop for you! These
            interests are private to you.
          </Text>
        </View>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={interestOptions}
          renderItem={({ item }) => <SelectGrid options={item} cols={2} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text className="text-lg font-semibold mb-4">{title}</Text>
          )}
        />
        <View className="mb-5 py-5">
          <TouchableOpacity
            onPress={() => onboardInterests()}
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
    </SafeAreaView>
  );
};

export default InterestOnboard;
