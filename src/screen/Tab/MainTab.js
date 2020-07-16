import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen";
import HomeStack from "../../navigator/HomeStack"
import LogoutScreen from "../LogoutScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Icon } from "native-base";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator 
    tabBarOptions={{
        activeTintColor:Colors.primaryColor,
        style:{
            backgroundColor:"#20242F",
            borderTopWidth:0,
        },
    }}
    >
     <Tab.Screen 
     name="HomeStack" 
     component={HomeStack} 
     options={{
         tabBarIcon:({color,size})=>(
         <Icon type="Entypo" name="home" style={{color}} />
         )
         }} 
        />
     
     <Tab.Screen 
     name="Logout" 
     component={LogoutScreen}
     options={{
        tabBarIcon:({color,size})=>(
          
        <Icon type="Ionicons" name="restaurant" style={{color}} />
        )
        }} 
     />
    </Tab.Navigator>
  );
};
