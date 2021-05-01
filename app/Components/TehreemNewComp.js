import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimension,
  Dimensions,
} from "react-native";

export default function TehApp() {
  function recbutton() {
    let wd = Dimensions.get("window");
    alert("Open University Recommendation");
    console.log(wd);
  }
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={() => recbutton()} style={styles.rec}>
        <View>
          <Text style={styles.text1}>University{"\n"}Recommendation</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.personality}>
        <Text style={styles.text2}>Personality Test</Text>
      </View>
      <View style={styles.browsefeed}>
        <Text style={styles.text3}>Browse Feed</Text>
      </View>
      <View style={styles.moreopt}>
        <Text style={styles.text4}>More Options</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    height: "100%",
  },
  rec: {
    backgroundColor: "lightseagreen",
    width: "100%",
    height: "25%",
  },
  personality: {
    backgroundColor: "lightcyan",
    width: "100%",
    height: "25%",
  },
  browsefeed: {
    backgroundColor: "lightseagreen",
    width: "100%",
    height: "25%",
  },
  moreopt: {
    backgroundColor: "lightcyan",
    width: "100%",
    height: "25%",
  },
  text1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    textShadowColor: "black",
    textAlign: "right",
    textAlignVertical: "auto",
    fontFamily: "monospace",
    marginTop: 70,
    marginRight: 20,
  },
  text2: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    textShadowColor: "black",
    textAlign: "left",
    marginTop: 70,
    marginLeft: 20,
    fontFamily: "monospace",
  },
  text3: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    textShadowColor: "black",
    textAlign: "right",
    fontFamily: "monospace",
    marginTop: 70,
    marginRight: 20,
  },
  text4: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    textShadowColor: "black",
    textAlign: "left",
    fontFamily: "monospace",
    marginTop: 70,
    marginLeft: 20,
  },
});
