import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Tagline from "../../components/Text/Tagline";
import Colors from "../../constants/Colors";
import ImageScale from "react-native-scalable-image";
import { Icon } from "native-base";

import PlaceholderProfPic from "../../../assets/images/signup_bg.png";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  likeBtn: {
    fontSize: 22,
    color: "white",
  },
});

export default ({ navigation, data }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.backgroundColor,
        width: width - 30,
        marginHorizontal: 15,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 6,
        marginVertical: 10,
      }}
    >
      <ImageScale
        source={{
          uri: data.image,
        }}
        style={{
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        width={width - 30}
      />
      <View style={{ paddingHorizontal: 13 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 11,
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <TextUI style={{ marginRight: 4 }} bold>
              {data.restaurantName}
            </TextUI>

            <TextUI size="sm" style={{ marginTop: 11, height: null }}>
              {data.rating}
            </TextUI>
          </View>
        </View>
      </View>
    </View>
  );
};
