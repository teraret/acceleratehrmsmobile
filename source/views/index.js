import React, { useState, useEffect } from "react";
import Auth from "../security/auth";
import { useSelector, useDispatch } from "react-redux";
import WelcomeScreen from "./welcome/welcome_page";
import LoginScreen from "./login/login_page";
import RegisterScreen from "./register/register_page";
import DashboardScreen from "./dashboard/dashboard_screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  logoutHandler,
  loadLoginSuccess,
  loadLogoutSuccess,
} from "../redux/index";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default function Index(props) {
  const dispatch = useDispatch();
  const companydata = useSelector((state) => state.login);

  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState({});
  console.log("The value " + companydata.loggedIn);
  //setIsLoading(companydata);

  useEffect(() => {
    console.log("app mounting...");
    (async () => {
      if (await Auth.loggedIn()) {
        dispatch(loadLoginSuccess);
      } else {
        dispatch(loadLogoutSuccess);
      }
    })();
  });

  return (
    <NavigationContainer>
      {companydata.loggedIn ? (
        <Drawer.Navigator>
          <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
        </Drawer.Navigator>
      ) : (
        <HomeScreen />
      )}
    </NavigationContainer>
  );
}
