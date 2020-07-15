import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider, useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import MainTab from "../screen/Tab/MainTab";
import LoginScreen from "../screen/LoginScreen";
import HomeStack from "../navigator/HomeStack";
import HomeScreen from "../screen/HomeScreen";





const Stack = createStackNavigator();

export default () => {
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  // Pengganti compDidMount, compDidUpdate, compWillUnmount
  //saasd asdasd
  useEffect((storageItem) => {
    console.log(storageItem)
    AsyncStorage.getItem("userData")   
      .then((storageItem) => {
        console.log(storageItem);//asasdsasdaasdsadsd
        if (!storageItem) throw "Item is empty";
        dispatch({
          type: "USER_LOGIN",
          payload: JSON.parse(storageItem),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
//asdsad
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userSelector.login ? (
          <Stack.Screen
            options={{ animationEnabled: false }}
            name="MainTab"
            component={MainTab}
          />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
