import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Button,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  Pressable,
} from "react-native";

import AddButton from "../components/AddButton";
import DeleteAll from "../components/DeleteAll";

import { CountDownItem } from "../components/CountDownItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CountDownScreen = ({ route, navigation }) => {
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure?</Text>
            <View
              style={{
                flexDirection: "row",
              }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setList([]);
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        data={list}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <CountDownItem
            time={item.time}
            label={item.title}
            color={item.color}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        style={{
          top: "72%",
          left: "84%",
          width: 40,
          height: 40,
          position: "absolute",
        }}
        onPress={() => {
          setModalVisible(true);
        }}>
        <DeleteAll width={40} height={40} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          top: "80%",
          left: "80%",
          width: 70,
          height: 70,
          position: "absolute",
        }}
        onPress={() => {
          navigation.navigate("SetDate");
        }}>
        <AddButton width={70} height={70} />
      </TouchableOpacity>

      <StatusBar barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
