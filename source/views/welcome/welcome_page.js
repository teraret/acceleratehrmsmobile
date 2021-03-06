import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import {welcomeStyle} from "./welcome_style";

function WelcomeScreen({ navigation }) {
  const pressLoginHandler = () => {
    navigation.navigate("LoginScreen");
  };
  const pressRegisterHandler = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://source.unsplash.com/1600x900/?medical",
      }}
    >
      <Button
        style={styles.loginButton}
        mode="outlined"
        onPress={pressLoginHandler}
      >
        Login
      </Button>
      <Button
        style={styles.registerButton}
        mode="outlined"
        onPress={pressRegisterHandler}
      >
        Register
      </Button>
    </ImageBackground>
  );
}

export default WelcomeScreen;
const styles = StyleSheet.create( welcomeStyle );
