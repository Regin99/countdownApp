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
        <Stack.Screen
          name="SetDate"
          component={SetDateScreen}
          options={{
            headerStyle: {
              backgroundColor: "#343434",
            },
            headerTintColor: "#f2f2f2",
            headerTitle: "Select Date",
          }}
        />
        <Stack.Screen
          name="SetTime"
          options={{
            headerStyle: {
              backgroundColor: "#343434",
            },
            headerTintColor: "#f2f2f2",
            headerTitle: "Select Time",
          }}
          component={SetTimeScreen}
        />
        <Stack.Screen
          name="AddCountDown"
          options={{
            headerStyle: {
              backgroundColor: "#343434",
            },
            headerTintColor: "#f2f2f2",
            headerTitle: "Add CountDown",
          }}
          component={AddCountDownScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
