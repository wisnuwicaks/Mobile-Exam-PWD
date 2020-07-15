import React,{useEffect, useState} from "react"
import {StyleSheet, Text, View} from "react-native"
import {useSelector,useDispatch} from "react-redux"
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
    flex:1,
    backgroundColor:Colors.backgroundColor,
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
    <View style={{...styles.container}}>
      <TextUI accent bold size="lg"> {userSelector.username}</TextUI>  
        <Button onPress={logoutHandler} type="secondary" size="md">
            Logout
        </Button>
    </View>
    )
}