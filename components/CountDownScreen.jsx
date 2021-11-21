import React, { useState, useEffect } from "react";
import { FlatList, View, Button, StatusBar, StyleSheet } from "react-native";

import { CountDownItem } from "./CountDownItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CountDownScreen = ({ route, navigation }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("list");
        const parse = JSON.parse(value);
        parse && setList(parse);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const setData = async () => {
      try {
        await AsyncStorage.setItem("list", JSON.stringify(list));
      } catch (e) {
        console.log(e);
      }
    };
    setData();
  }, [list]);

  useEffect(() => {
    if (route.params) {
      setList([...list, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <CountDownItem
            time={item.time}
            label={item.title}
            color={item.color}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Add"
        onPress={() => {
          navigation.navigate("SetDate");
        }}
      />
      <Button
        title="Delete"
        onPress={() => {
          setList([]);
        }}
      />

      <StatusBar barStyle="dark-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
