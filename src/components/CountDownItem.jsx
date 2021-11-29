import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Oswald_700Bold } from "@expo-google-fonts/oswald";

export const CountDownItem = ({ time, label, color }) => {
  const endDate = new Date(JSON.parse(time)).setSeconds(0, 0);
  const [timeLeft, setTimeLeft] = useState("infinity");
  let [fontsLoaded] = useFonts({
    Oswald_700Bold,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;
      const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(
        (distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft(
        `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`
      );
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={[styles.container, { backgroundColor: color }]}>
        <Text
          style={[styles.text, { fontSize: 18, fontFamily: "Oswald_700Bold" }]}>
          {timeLeft}
        </Text>
        <Text style={[styles.text, { fontFamily: "Oswald_700Bold" }]}>
          {label}
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 75,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  text: {
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: "black",

    fontSize: 20,
    color: "#fff",
  },
});
