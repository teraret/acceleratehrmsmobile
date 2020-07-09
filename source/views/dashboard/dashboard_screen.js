import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Auth from "../../security/auth";
import dashboardStyle from "./dashboard_style";

function DashboardScreen({ navigation }) {
  const logoutHandler = () => {
    Auth.logOut();
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
        onPress={logoutHandler}
      >
        Login
      </Button>
    </ImageBackground>
  );
}
export default DashboardScreen;
const styles = StyleSheet.create(dashboardStyle);
