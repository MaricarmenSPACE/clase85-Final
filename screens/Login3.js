import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  Image,
} from "react-native";
import React, { Component } from "react";
import firebase from "firebase";

const bgImage = require("../assets/background1.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");


export default class LoginScreen extends Component {
  render() {
    return (
      
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <ImageBackground source={bgImage} style={styles.bgImage}>

        <Image source={appIcon} style={styles.appIcon}/>
        <Image source={appName} style={styles.appName}/>





        </ImageBackground>





      </KeyboardAvoidingView>
      
      
      
      );
  }
}

const styles = StyleSheet.create({

container:{
 
    flex:1,
    backgroundColor:'#FFFFFF'

},

bgImage:{
   flex:1,
   resizeMode:'cover',
   justifyContent:"center"


},

appIcon:{
    width:280,
    height:280,
    resizeMode:"contain",
    marginTop:80
},

appName:{

    width:180,
    height:180,
    resizeMode:"contain",



}

});
