import * as React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Provider, Portal, Button, Dialog } from "react-native-paper";

import Card_Content_Component from "../../component/card/card_content/card_content_component";
import SearchbarComponent from "../../component/searchbar/searchbar_component";
import TableComponent from "../../component/table/table_component";
import { EmployeeListStyle, theme } from "./employee_list_style";

const employee_list = () => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <View>
      <Card_Content_Component>
        <Provider theme={theme}>
          <Portal>
            <View style={styles.rowview}>
              <View style={styles.searchview}>
                <SearchbarComponent />
              </View>
              <View style={styles.filter}>
                <Button onPress={showDialog}>Filter</Button>
              </View>
            </View>

            <View style={styles.table}>
              <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                  <Dialog.ScrollArea>
                    <ScrollView
                      contentContainerStyle={{ paddingHorizontal: 24 }}
                    >
                      <Text>This is a scrollable area</Text>
                    </ScrollView>
                  </Dialog.ScrollArea>
                </Dialog>
              </Portal>

              <TableComponent />
            </View>
          </Portal>
        </Provider>
      </Card_Content_Component>
    </View>
  );
};

export default employee_list;

const styles = new StyleSheet.create(EmployeeListStyle);
