import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelectedInterests } from "../store/useSelectedInterests";

interface IProps {
  name: string;
  emoji: string;
}

const InterestSelect: React.FC<IProps> = ({ name, emoji }) => {
  const selectedInterest = useSelectedInterests(
    state => state.selectedInterests
  );
  const updateSelectedInterest = useSelectedInterests(
    state => state.updateInterests
  );
  const removeSelectedInterest = useSelectedInterests(
    state => state.removeInterests
  );
  const [isSelected, setSelected] = useState<Boolean>(false);
  const handleSelection = () => {
    setSelected(!isSelected);
  };
  useEffect(() => console.log(selectedInterest), [isSelected]);
  useEffect(() => {
    if (isSelected) {
      updateSelectedInterest(`${emoji} ${name}`);
    } else {
      removeSelectedInterest(`${emoji} ${name}`);
    }
  }, [isSelected]);
  return (
    <TouchableOpacity
      onPress={handleSelection}
      className={`flex-row  rounded-lg p-3 mb-3 w-44 ${
        isSelected ? "bg-button-secondary" : "bg-box-bg"
      }`}
    >
      <Text className="mr-1 text-md">{emoji}</Text>
      <Text className="text-md">{name}</Text>
    </TouchableOpacity>
  );
};

export default InterestSelect;
