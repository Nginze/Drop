import { View, Text, FlatList } from "react-native";
import React from "react";
import InterestSelect from "./InterestSelect";

interface IProps {
  options: { name: string; emoji: string }[];
  cols: number;
}

const SelectGrid: React.FC<IProps> = ({ options, cols }) => {
  return (
    <FlatList
      columnWrapperStyle={{justifyContent: 'space-between'}}
      className={
        "mb-6"
      }
      data={options}
      numColumns={cols}
      renderItem={({ item: { emoji, name } }) => (
        <InterestSelect name={name} emoji={emoji} />
      )}
    />
  );
};

export default SelectGrid;
