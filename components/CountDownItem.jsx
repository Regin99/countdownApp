import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

export const CountDownItem = ({ time, label, color }) => {
  const endDate = new Date(JSON.parse(time)).setSeconds(0, 0);
  const [timeLeft, setTimeLeft] = useState("infinity");

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

  return (
    <View style={styles.container}>
      <Text style={{ backgroundColor: color }}>{timeLeft}</Text>
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
