import React from "react";
import Index from "./source/views/index";
import { View, StyleSheet, ScrollView, Text } from "react-native";

import { Provider } from "react-redux";
import store from "./source/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
