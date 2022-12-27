import { View, Text, TouchableOpacity } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "@gorhom/bottom-sheet";

interface IProps {
  setShowCameraOptions: (value: Boolean) => void;
  launchCamera: () => void;
  launchMediaLibrary: () => void;
}

const CameraOptions: React.FC<IProps> = ({
  setShowCameraOptions,
  launchCamera,
  launchMediaLibrary,
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["30%", "30%"], []);

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
        onClose={() => setShowCameraOptions(false)}
        enablePanDownToClose
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View className="w-full h-full px-3 flex items-center justify-center">
          <TouchableOpacity
            onPress={() => launchCamera()}
            className="bg-button-primary py-3 px-2 mb-6 rounded-lg w-full"
          >
            <Text className="text-center text-white font-bold">
              Take Picture
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => launchMediaLibrary()}
            className="bg-button-primary py-3 px-2 rounded-lg w-full"
          >
            <Text className="text-center text-white font-bold">
              Select Existing
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </>
  );
};

export default CameraOptions;
