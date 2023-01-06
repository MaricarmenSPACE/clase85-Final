import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
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
          <View>
            <Image source={appIcon} style={styles.appIcon} />
            <Image source={appName} style={styles.appName} />
          </View>
          <View style={styles.lowerContainer}>
            <TextInput
              style={styles.textinput}
              placeholder={"escribe tu correo electronico"}
              placeholderTextColor={"#FFFFFF"}
              autoFocus
              onChangeText={(text) => this.setState({ email: text })}
            />
            <TextInput
              style={styles.textinput}
              placeholder={"escribe tu contraseña"}
              placeholderTextColor={"#FFFFFF"}
              secureTextEntry
              onChangeText={(text) => this.setState({ email: text })}
            />

            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              onPress={() => this.handleLogin(email, password)}
            >
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  appIcon: {
    width: 280,
    height: 280,
    resizeMode: "contain",
    marginTop: 80,
  },
  appName: {
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
  lowerContainer: {
    flex: 0.5,
    alignItems: "center",
  },
  textinput: {
    width: "75%",
    height: 55,
    padding: 10,
    borderColor: "#FFFFFF",
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold",
    backgroundColor: "#5653D4",
  },
  button: {
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15,
  },
  buttonText:{
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold",
  }
});
