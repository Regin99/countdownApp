import React, { useState, useEffect } from "react";

import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ButtonContainer = ({ title, onPress, color, active }) => {
  const sttttyyyle = [styles.button];
  active.name === title ? sttttyyyle.push(styles.active) : null;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: color, borderRadius: 5 }}>
      <Text style={sttttyyyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ColorsContainer = ({ onChange, colors, activeColor }) => {
  return (
    <View>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-around" }}
        contentContainerStyle={styles.container}
        numColumns={4}
        data={colors}
        renderItem={({ item }) => (
          <ButtonContainer
            onPress={() => {
              onChange(item);
            }}
            title={item.name}
            color={item.color}
            active={activeColor}
          />
        )}
        keyExtractor={(item, index) => Date.now().toString() + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "space-around",
    // height: 200,
  },
  button: {
    // marginTop: 10,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: "black",
    textAlign: "center",
    color: "#f2f2f2",
    width: 75,
    height: 50,
    borderRadius: 5,
  },
  active: {
    borderWidth: 3,
    borderColor: "#f2f2f2",
    borderRadius: 5,
  },
});
