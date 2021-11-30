import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const SetDateScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  return (
    <View style={styles.container}>
      <DateTimePicker
        value={date}
        mode="date"
        display={"spinner"}
        themeVariant="dark"
        textColor="#f2f2f2"
        onChange={(event, date) => {
          setDate(date);
        }}
      />
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate("SetTime", { date: JSON.stringify(date) });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    justifyContent: "space-evenly",
    height: "100%",
  },
});
