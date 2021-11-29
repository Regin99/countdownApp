import React, { useState } from "react";
import { View, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const SetDateScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  return (
    <View>
      <DateTimePicker
        value={date}
        mode="date"
        display={"spinner"}
        onChange={(event, date) => {
          setDate(date);
        }}
      />
      {/* <DateTimePicker value={new Date()} mode={"time"} display={"spinner"} /> */}
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate("SetTime", { date: JSON.stringify(date) });
        }}
      />
    </View>
  );
};
