import { DefaultTheme } from "react-native-paper";
const EmployeeListStyle = {
  portal: {
    backgroundColor: "black",
  },
  rowview: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  searchview: {
    flex: 2,
    margin: "5%",
  },
  filter: {
    flex: 1,
    margin: "6%",
  },
  table: {
    flex: 8,
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

export { EmployeeListStyle, theme };
