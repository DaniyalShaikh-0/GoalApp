import React, { useState } from "react";
import Styles from "../Styles/TextStyles";
import {
  Text,
  View,
  TextInput,
  Button,
  Modal,
  Pressable,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
const Buttons = (props) => {
  console.log("PRO, : ", props);
  return (
    <Modal visible={props.mode} animationType="fade">
      <View style={props.viewStyle}>
        <Pressable
          onPress={() => props.modeManager(false)}
          style={({ pressed }) => props.CloseButton}
        >
          <Text style={props.CloseButton}>Close</Text>
        </Pressable>
        <Button title="ADD" color="#66ff33" onPress={props.add}></Button>
        <View style={{ padding: 5 }}></View>
        <View></View>
        <Button
          title="DELETE current"
          color="orange"
          onPress={props.delCur} //deleteCurrent
        ></Button>
        <View style={{ padding: 5 }}></View>
        <Button
          title="DELETE old tasks"
          color="red"
          onPress={props.delPrev} //deletePrev
        ></Button>
      </View>
    </Modal>
  );
};
export default Buttons;
