import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import RootNavigator from "./src/navigator/RootNavigator";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/redux/reducers";
import ReduxThunk from "redux-thunk";
import { Provider, useDispatch, useSelector } from "react-redux";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
