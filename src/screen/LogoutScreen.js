import React,{useEffect, useState} from "react"
import {StyleSheet, Text, View,ImageBackground} from "react-native"
import {useSelector,useDispatch} from "react-redux"
import LoginBG from "../../assets/images/login_bg.jpg";

import TextUI from "../components/Text/TextUI"
import Axios from "axios"
import Colors from "../constants/Colors"
import {API_URL} from "../constants/API"
import AsyncStorage from "@react-native-community/async-storage"
import Button from "../components/Button/Button"
const styles = StyleSheet.create({
    container:{
    alignItems:"center",
    justifyContent:"center",
    paddingTop:15,
    flex:1,
    backgroundColor:"white",
 
    },
})

export default ({navigation})=>{
    const userSelector = useSelector((state)=>state.user)
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        AsyncStorage.removeItem("userData")
        .then(result=>{
    AsyncStorage.removeItem("userData");

           dispatch({
            type:"USER_LOGOUT"
           }) 
           console.log("Logout");
        
        })
        .catch()
    }
    return(
        // <ImageBackground source={LoginBG}>
    <View style={{...styles.container}}>
        <View style={{width:100}}>
        <Button onPress={logoutHandler} type="third" size="md">
            Logout
        </Button>
        </View>
        
        
    </View>
    // </ImageBackground>
    )
}