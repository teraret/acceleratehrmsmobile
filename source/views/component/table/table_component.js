import * as React from "react";

import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import TableStyle from "./style";

const table_component = () => (
  <DataTable style={styles.Main}>
    <DataTable.Header>
      <DataTable.Title>Dessert</DataTable.Title>
      <DataTable.Title numeric>Calories</DataTable.Title>
      <DataTable.Title numeric>Fat</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={(page) => {
        console.log(page);
      }}
      label="1-2 of 6"
    />
  </DataTable>
);

export default table_component;
const styles = new StyleSheet.create(TableStyle);
