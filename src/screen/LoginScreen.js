import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import Button from "../components/Button/Button";
import LoginBG from "../../assets/images/login_bg.jpg";
import DarkOverlay from "../components/General/DarkOverlay";
import TextUI from "../components/Text/TextUI";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import { Icon } from "native-base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  welcomeText: {
    // fontFamily: "AvenirNextLTPro-Heavy",
    fontSize: 34,
    height: 50,
  },
  loginText: {
    marginTop: 12,
  },
});

export default (props) => {
  const [usernameInput, setUsernameInput] = useState("");

  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  const loginBtnHandler = () => {
    // if(userSelector.username==usernameInput){
    //sdasdasd
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        username: usernameInput,
      })
    );
    return dispatch({
      type: "USER_LOGIN",
      payload: { username: usernameInput },
    });

    // }
    return Alert.alert(
      "Username Salah",
      "Maaf username kamu salah",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };

  return (
    <ImageBackground source={LoginBG} style={{ ...styles.bgImage }}>
      <DarkOverlay />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{ justifyContent: "center", flex: 1 }}
        >
          <View>
            <Text
              style={{
                fontSize: 50,
                textAlign: "center",
                fontWeight: "bold",
                color: "orange",
              }}
            >
              Tomato App
            </Text>
            <Icon
              type="Ionicons"
              name="restaurant"
              style={{
                color: "orange",
                fontSize: 100,
                textAlign: "center",
              }}
            />
          </View>

          <View style={{ ...styles.contentContainer }}>
            <View
              style={{
                borderRadius: 22,
                paddingVertical: 11,
                paddingHorizontal: 20,
                justifyContent: "flex-start",
                marginTop: 58,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  opacity: 0.5,
                  borderRadius: 5,
                  paddingHorizontal: 20,
                  borderBottomColor:"black",
                  borderBottomWidth:2,
                  ...StyleSheet.absoluteFillObject,
                }}
              />
              <Icon
                type="AntDesign"
                name="user"
                style={{
                  color: "black",
                }}
              />
              <TextInput
                autoCapitalize="none"
                placeholderTextColor="black"
                style={{
                  // fontFamily: "AvenirNextLTPro-Regular",
                  fontSize: 17,
                  color: "black",
                  lineHeight: 19,
                  
                }}
                placeholder="Username"
                value={usernameInput}
                onChangeText={(text) => setUsernameInput(text)}
              />
            </View>

            <Button
              onPress={loginBtnHandler}
              containerStyle={{ marginTop: 40 }}
              size="lg"
            >
              LOGIN
            </Button>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
