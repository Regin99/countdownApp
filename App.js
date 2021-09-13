import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  StatusBar,
  FlatList,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={(inputText) => {
          setText(inputText);
          console.log(list);
        }}
        placeholder="Enter text"
      />
      <Button
        title="Add"
        onPress={() => {
          setList([...list, text]);
          setText("");
        }}
      />
      <StatusBar barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
