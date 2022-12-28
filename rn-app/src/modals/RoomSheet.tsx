import { View, Text, Button, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";



const RoomSheet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["90%", "90%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <>
      <BottomSheet
        containerStyle={{
          width: "100%",
          backgroundColor: "rgba(52, 52, 52, 0.8)",
        }}
        enablePanDownToClose
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View className="w-full h-full px-3 flex items-center justify-center">
          <TouchableOpacity className="bg-button-primary py-3 px-2 mb-6 rounded-lg w-full">
            <Text className="text-center text-white font-bold">
              Take Picture
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-button-primary py-3 px-2 rounded-lg w-full">
            <Text className="text-center text-white font-bold">
              Select Existing
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
     
    </>
  );
};

export default RoomSheet
