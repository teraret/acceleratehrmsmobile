import * as React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import SearchbarStyle from "./style";

const SearchbarComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.Main}
    />
  );
};

export default SearchbarComponent;
const styles = new StyleSheet.create(SearchbarStyle);
