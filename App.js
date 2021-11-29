import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SetDateScreen } from "./src/screens/SetDateScreen";
import { CountDownScreen } from "./src/screens/CountDownScreen";
import { AddCountDownScreen } from "./src/screens/AddCountDownScreen";
import { SetTimeScreen } from "./src/screens/SetTimeScreen";
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
