import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SetDateScreen } from "./components/SetDateScreen";
import { CountDownScreen } from "./components/CountDownScreen";
import { AddCountDownScreen } from "./components/AddCountDownScreen";
import { SetTimeScreen } from "./components/SetTimeScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CountDown">
        <Stack.Screen
          name="CountDown"
          component={CountDownScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="SetDate" component={SetDateScreen} />
        <Stack.Screen name="SetTime" component={SetTimeScreen} />
        <Stack.Screen name="AddCountDown" component={AddCountDownScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
