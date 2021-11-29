import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";
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
    <View>
      <Text>AddLabel</Text>
      <TextInput
        placeholder="Enter Label"
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <Text>Pick color</Text>
      <ColorsContainer
        colors={COLORS}
        activeColor={color}
        onChange={(data) => {
          setColor(data);
        }}
      />
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
  );
};
