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
import H1 from "../../src/components/Text/H1";
import TextUI from "../../src/components/Text/TextUI";
import Tagline from "../../src/components/Text/Tagline";
import Colors from "../constants/Colors";
import RestaurantCard from "./Card/RestaurantCard";
import Axios from "axios";
import { API_URL } from "../constants/API";
import { Icon } from "native-base";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({});


export default ({ navigation }) => {
  const [restaurantList, setRestaurantList] = useState([]);
  
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
      {/* <SafeAreaView /> */}
      
      <FlatList
        ListHeaderComponent={() => {
          return <H1 bold>RESTAURANT LIST</H1>;
        }}
        ListHeaderComponentStyle={{ marginHorizontal: 15 }}
        contentContainerStyle={{ marginTop: 46 }}
        data={restaurantList}//restaurantList berisi array of object
        renderItem={renderCard}//renderCard adalah function
        // renderItem adalah properties dari flatlist yang menerima function untuk merender
        // item dari array.
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
