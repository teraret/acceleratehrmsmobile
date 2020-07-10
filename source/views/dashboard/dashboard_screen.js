import * as React from "react";
import {
  Avatar,
  Divider,
  Card,
  IconButton,
  Title,
  Paragraph,
  TextInput,
} from "react-native-paper";
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from "react-native";
import { dashboardStyle } from "./dashboard_style";

const EmployeeDetail = () => {
  const [text, setText] = React.useState("tejas6083@gmail.com");
  const [disable, setDisable] = React.useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.cardStyle}>
        <Card.Content>
          <Title>Employee Detail</Title>
          <Card.Title
            title="Employee Name"
            subtitle="Employee Category"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => (
              <IconButton
                {...props}
                icon="pencil"
                onPress={() => {
                  disable ? setDisable(false) : setDisable(true);
                }}
              />
            )}
          />
          <ScrollView style={styles.scrollView}>
            <Paragraph>Card content</Paragraph>

            <View style={styles.viewColumn}>
              <View style={styles.viewRow}>
                <Card.Content>
                  <Title>Card title</Title>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <View style={styles.viewRow}>
                        <TextInput
                          mode="outlined"
                          label="Email"
                          dense="true"
                          disabled={disable}
                          value={text}
                          onChangeText={(text) => setText(text)}
                          style={styles.inputtextStyle}
                        />
                        <TextInput
                          mode="outlined"
                          label="Email"
                          dense="true"
                          disabled={disable}
                          value={text}
                          onChangeText={(text) => setText(text)}
                          style={styles.inputtextStyle}
                        />
                        <TextInput
                          mode="outlined"
                          label="Email"
                          dense="true"
                          disabled={disable}
                          value={text}
                          onChangeText={(text) => setText(text)}
                          style={styles.inputtextStyle}
                        />
                      </View>
                    </View>
                  </View>
                </Card.Content>
              </View>
              <Divider />

              <View style={styles.viewRow}>
                <Card.Content>
                  <Title>Card title</Title>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <View style={styles.viewRow}>
                        <TextInput
                          mode="outlined"
                          label="Email"
                          dense="true"
                          disabled={disable}
                          value={text}
                          onChangeText={(text) => setText(text)}
                          style={styles.inputtextStyle}
                        />
                        <TextInput
                          mode="outlined"
                          label="Email"
                          dense="true"
                          disabled={disable}
                          value={text}
                          onChangeText={(text) => setText(text)}
                          style={styles.inputtextStyle}
                        />
                        <TextInput
                          mode="outlined"
                          label="Email"
                          dense="true"
                          disabled={disable}
                          value={text}
                          onChangeText={(text) => setText(text)}
                          style={styles.inputtextStyle}
                        />
                      </View>
                    </View>
                  </View>
                </Card.Content>
              </View>
              <Divider />

              <View style={styles.viewRow}>
                <Card.Content>
                  <Title>Card title</Title>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <View style={styles.viewRow}>
                        <TextInput
                          mode="outlined"
                          label="Email"
                          dense="true"
                          disabled={disable}
                          value={text}
                          onChangeText={(text) => setText(text)}
                          style={styles.inputtextStyle}
                        />
                        <TextInput
                          mode="outlined"
                          label="Email"
                          dense="true"
                          disabled={disable}
                          value={text}
                          onChangeText={(text) => setText(text)}
                          style={styles.inputtextStyle}
                        />
                        <TextInput
                          mode="outlined"
                          label="Email"
                          dense="true"
                          disabled={disable}
                          value={text}
                          onChangeText={(text) => setText(text)}
                          style={styles.inputtextStyle}
                        />
                      </View>
                    </View>
                  </View>
                </Card.Content>
              </View>
              <Divider />

              <View style={styles.viewRow}>
                <Card.Content>
                  <Title>Card title</Title>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <View style={styles.viewRow}>
                        <TextInput
                          mode="outlined"
                          label="Email"
                          dense="true"
                          disabled={disable}
                          value={text}
                          onChangeText={(text) => setText(text)}
                          style={styles.inputtextStyle}
                        />
                        <TextInput
                          mode="outlined"
                          label="Email"
                          dense="true"
                          disabled={disable}
                          value={text}
                          onChangeText={(text) => setText(text)}
                          style={styles.inputtextStyle}
                        />
                        <TextInput
                          mode="outlined"
                          label="Email"
                          dense="true"
                          disabled={disable}
                          value={text}
                          onChangeText={(text) => setText(text)}
                          style={styles.inputtextStyle}
                        />
                      </View>
                    </View>
                  </View>
                </Card.Content>
              </View>
              <Divider />

              <View style={styles.viewRow}>
                <Card.Content>
                  <Title>Card title</Title>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <View style={styles.viewRow}>
                        <TextInput
                          mode="outlined"
                          label="Email"
                          dense="true"
                          disabled={disable}
                          value={text}
                          onChangeText={(text) => setText(text)}
                          style={styles.inputtextStyle}
                        />
                        <TextInput
                          mode="outlined"
                          label="Email"
                          dense="true"
                          disabled={disable}
                          value={text}
                          onChangeText={(text) => setText(text)}
                          style={styles.inputtextStyle}
                        />
                        <TextInput
                          mode="outlined"
                          label="Email"
                          dense="true"
                          disabled={disable}
                          value={text}
                          onChangeText={(text) => setText(text)}
                          style={styles.inputtextStyle}
                        />
                      </View>
                    </View>
                  </View>
                </Card.Content>
              </View>
              <Divider />
            </View>
          </ScrollView>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default EmployeeDetail;

const styles = StyleSheet.create(dashboardStyle);
