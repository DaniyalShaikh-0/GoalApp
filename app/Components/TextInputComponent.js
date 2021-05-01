import React, { useState } from "react";
import Styles from "../Styles/TextStyles";
import {
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
const CurrGoal = (props) => {
  return (
    <TextInput
      style={Styles.inputStyle}
      placeholder="Goalss"
      placeholderTextColor="#bbb"
      onChangeText={props.handleGoal}
      value={props.value}
    ></TextInput>
  );
};
export default CurrGoal;
