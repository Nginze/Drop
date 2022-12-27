import AsyncStorage from "@react-native-async-storage/async-storage";
import { userData } from "../types/UserData";

export const storeData = async (value: userData) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@userData", jsonValue);
  } catch (err) {
    console.log(err);
  }
};

export const getData = async (): Promise<userData | undefined> => {
  try {
    const jsonValue = await AsyncStorage.getItem("@userData");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    console.log(err);
  }
};
