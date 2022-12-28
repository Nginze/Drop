import { View, Text } from 'react-native'
import React from 'react'
import { createBottomSheetNavigator } from "@th3rdwave/react-navigation-bottom-sheet";
import RoomSheet from '../modals/RoomSheet';
type Props = {}
const BottomSheet = createBottomSheetNavigator();
const BottomSheets = (props: Props) => {
  return (
  <BottomSheet.Navigator>
    <BottomSheet.Screen name='roomSheet' component={RoomSheet}/>
  </BottomSheet.Navigator>
  )
}

export default BottomSheets