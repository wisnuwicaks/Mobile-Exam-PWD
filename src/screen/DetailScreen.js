import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import H1 from "../components/Text/H1";
import TextUI from "../components/Text/TextUI";
import Tagline from "../components/Text/Tagline";
import Colors from "../constants/Colors";
import { Icon } from "native-base";
import Header from "../components/General/Header";
import Image from "react-native-scalable-image";
import Axios from "axios";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 18,
    alignItems: "center",
  },
  detailContainer: {
    paddingHorizontal: 30,
    marginTop: 12,
  },
});

export default (props) => {
  const { restaurantDetail } = props.route.params;
  console.log("POST DETAIL: ", restaurantDetail);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <SafeAreaView />

      <Header {...props} title={restaurantDetail.restaurantName} style={{}} />
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={{ maxHeight: 540 }}
          width={width}
          source={{ uri: restaurantDetail.image }}
        />

        <View style={{ ...styles.detailContainer }}>
          
          <TextUI size="sm" style={{ height: null }}>
            {restaurantDetail.rating}
          </TextUI>
          <TextUI size="sm" style={{ height: null }}>
            {restaurantDetail.address}
          </TextUI>

          <TextUI size="sm" style={{ height: null }}>
            {restaurantDetail.cuisine}
          </TextUI>
          <TextUI size="sm" style={{ height: null }}>
            {restaurantDetail.openTime + "to" + restaurantDetail.closeTime}
          </TextUI>

          <TextUI size="sm" style={{ height: null }}>
            {restaurantDetail.costForTwo}
          </TextUI>
        </View>
      </ScrollView>
    </View>
  );
};
