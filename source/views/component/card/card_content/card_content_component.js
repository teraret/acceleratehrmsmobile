import * as React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet } from "react-native";

import cardStyle from "./style";

const MyComponent = (props) => (
  <Card style={style.MainCard}>
      {props.children}
  </Card>
);

export default MyComponent;

const style = new StyleSheet.create(cardStyle);
