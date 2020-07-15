import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import DetailScreen from "../screen/DetailScreen";


const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
      <Stack.Screen component={DetailScreen} name="DetailScreen" />
    </Stack.Navigator>
  );
};
