import * as React from "react";
import {
  Modal,
  Portal,
  Text,
  Button,
  DefaultTheme,
  Provider,
} from "react-native-paper";
import { View, Dimensions } from "react-native";

const ModalComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
          <Text>Example Modal</Text>
        </Modal>
        <Button onPress={showModal}>Show</Button>
      </Portal>
    </Provider>
  );
};

export default ModalComponent;
