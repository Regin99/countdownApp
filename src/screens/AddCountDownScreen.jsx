import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import { ColorsContainer } from "../components/ColorsContainer";

const COLORS = [
  {
    name: "Cedar Chest",
    color: "#DB504A",
  },
  {
    name: "Bittersweet",
    color: "#FF6F59",
  },
  {
    name: "Minion Yellow",
    color: "#F2DC5D",
  },
  {
    name: "Amazon",
    color: "#4A7856",
  },
  {
    name: "Russian Violet",
    color: "#240B36",
  },
  {
    name: "Teal Blue",
    color: "#2D728F",
  },
  {
    name: "Onyx",
    color: "#393D3F",
  },
  {
    name: "Dark Blue Gray",
    color: "#745C97",
  },
];

export const AddCountDownScreen = ({ route, navigation }) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState(COLORS[0]);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>Enter event label</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter here..."
          value={title}
          onChangeText={(text) => {
            setTitle(text);
          }}
        />
      </View>
      <View style={{ flex: 3 }}>
        <Text style={styles.label}>Pick color</Text>
        <ColorsContainer
          style={{ flex: 1 }}
          colors={COLORS}
          activeColor={color}
          onChange={(data) => {
            setColor(data);
          }}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Button
          title="Done"
          onPress={() => {
            navigation.navigate("CountDown", {
              time: route.params.time,
              title: title,
              color: color.color,
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    justifyContent: "space-evenly",
    height: "100%",
  },
  label: {
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: "black",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 15,
    fontSize: 20,
    color: "#f2f2f2",
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    padding: 10,
  },
});
