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
import { render } from "react-dom";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  likeBtn: {
    fontSize: 22,
    color: "white",
  },
});
////
export default ({ navigation, data }) => {
  let renderStar = () => {
    let arrStar = [];
    for (let a = 0; a < data.rating; a++) {
      arrStar.push(
        <Icon
          type="AntDesign"
          name="star"
          style={{
            color: "white",
          }}
          key={data.id.toString()}
        />
      );
    }
    return arrStar;
  };
  return (
    <View
      onPress={() => navigation.navigate("Detail", { restaurantDetail: data })}
      style={{
        backgroundColor: Colors.backgroundColor,
        width: width/2,
        marginHorizontal:5,
        borderRadius: 2,
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
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DetailScreen", { restaurantDetail: data })
        }
      >
        <ImageScale
          source={{
            uri: data.image,
          }}
          style={{
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          }}
          width={width/2}
        />
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 2 }}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: 10,
            marginBottom: 10,
            padding:10
          }}
        >
          <View style={{ flex: 1, flexDirection: "row",borderColor:"white",borderWidth:2,
          marginLeft: 2, marginBottom:10
          }}>
            <TextUI style={{ height:30,width:100, fontSize:20 }} bold>
              <Icon
                type="AntDesign"
                name="star"
                style={{
                  color: "yellow",
                  paddingHorizontal :30
                }}
                
              />
              {data.rating}
            </TextUI>
          </View>
          <View style={{ marginTop:5, padding:5, borderColor:"white"}}>
            <TextUI style={{flexDirection:"column", fontSize:15}} bold>
              {data.restaurantName}
            </TextUI>
          </View>
        </View>
      </View>
    </View>
  );
};
