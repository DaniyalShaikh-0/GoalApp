import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
export default function UselessTextInput(){
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState('0000');
  
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="default"
          autoCapitalize="characters"
          editable={true}
          importantForAutofill='yes'
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 15,
      backgroundColor:'silver'
    },
  });