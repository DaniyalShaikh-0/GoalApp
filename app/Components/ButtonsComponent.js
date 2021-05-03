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
  ImageBackground,
} from "react-native";
import CurrGoal from "./TextInputComponent";
const Buttons = (props) => {
  // console.log("PRO, : ", props);
  return (
    <Modal visible={props.mode} animationType="fade">
      <ImageBackground
        source={require("../assets/Scenery.jpg")}
        style={{
          flex: 1,
          // alignContent: "flex-end",
          width: "100%",
          height: "100%",
          // marginTop: "10%",
          // justifyContent: "center",
        }}
      >
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

        <View style={props.layer} />
        <View style={props.inputStyle}>
          <CurrGoal handleGoal={props.goalManager} value={props.inpGoal} />
          {/* <TextInput style={styles.inputStyle}
      placeholder='Goals'
      placeholderTex tColor='#000000'
      onChangeText={goalManager}>
    </TextInput> */}
        </View>
      </ImageBackground>
    </Modal>
  );
};
export default Buttons;
