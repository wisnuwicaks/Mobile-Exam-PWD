import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import H1 from "../../src/components/Text/H1";
import TextUI from "../../src/components/Text/TextUI";
import Tagline from "../../src/components/Text/Tagline";
import Colors from "../constants/Colors";
import RestaurantCard from "./Card/RestaurantCard";
import Header from "../components/General/Header";

import Axios from "axios";
import { API_URL } from "../constants/API";
import { Icon } from "native-base";
import { Directions } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({});

export default ({ navigation }) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const userSelector = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get(`${API_URL}/restaurants`)
      .then((res) => {
        console.log(res.data.result);
        setRestaurantList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderCard = ({ item }) => {
    return <RestaurantCard navigation={navigation} data={item} />;
    //fungsi ini untuk return setiap item dalam array dalam bentu komponen PostCard
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <SafeAreaView />
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "orange",
          marginTop: 20,
          height: 50,
        }}
      >
        <View style={{ alignSelf: "center" }}>
          <Icon
            type="AntDesign"
            name="user"

            style={{
              color: "white",
              left:20
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            alignSelf: "center",
            marginStart: 250,
          }}
        >
          <Text style={{ color: "white" }}>
            {"Hallo " + userSelector.username}
          </Text>
        </View>
      </View>

      <FlatList
        contentContainerStyle={{ marginTop: 20 }}
        data={restaurantList} //restaurantList berisi array of object
        numColumns={2}
        renderItem={renderCard} //renderCard adalah function
        // renderItem adalah properties dari flatlist yang menerima function untuk merender
        // item dari array.
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
