import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
  Dimensions,
} from "react-native";
// import {Input, Button} from 'react-native-elements';
import CurrGoal from "./app/Components/TextInputComponent";
import Buttons from "./app/Components/ButtonsComponent";
import TehApp from "./app/Components/TehreemNewComp";
let default_ = "Stock Investment";
let num = 0;
let wd = Dimensions.width;
let ht = Dimensions.height;
export default function App() {
  // let x = 5;
  // if (x == 5) {
  //   x = 6;
  // }
  // x = 7;
  const [inpGoal, funcInpGoal] = useState(default_);
  const [listgoal, setlistgoal] = useState([]);
  const [key_unique, setkeyunique] = useState(0);
  const [modalState, setModalState] = useState(false);
  const givekey = () => {
    setkeyunique(key_unique + 1);
  };
  const goalManager = (text_inp) => {
    funcInpGoal(text_inp);
  };
  function remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }
  // const showKey = (recvd) => {
  //   // console.log('Inp goal is : ',inpGoal,'\nKey right now is : '
  //   // ,key_unique ,'also using func ket is: ',recvd.key ,'\n\nBut   INDEX IS :  ',listgoal.indexOf(inpGoal));
  //   for (var i in listgoal) {
  //     try {
  //       if (listgoal[i].key === recvd.key) {
  //         console.log("THe item is FOUND NOW");
  //         console.log(recvd);
  //         break;
  //       }
  //       console.log("\nI is : ", listgoal[i], "  & index is : ", i);
  //     } catch (e) {
  //       console.log("Cant type is : ", typeof listgoal[i]);
  //       break;
  //     }
  //   }

  //   // return(
  //   //   <Text>
  //   //     Goal Achieved
  //   //   </Text>
  //   //   );
  // };
  // const saveSt = () =>{
  //   txt=txt+'\n'+inpGoal;
  // }
  let X, Y;
  const set_list = () => {
    num++;
    givekey();
    setlistgoal((curgoals) => [
      ...curgoals,
      { key: key_unique.toString(), value: num.toString() + "  " + inpGoal },
    ]);
    funcInpGoal("");
    // console.log('currenly after adding: ',listgoal);
  };
  const del_sel_item = (recvd) => {
    // console.log("I HAVE RECEIVED THIS: ", recvd);
    num > 0 ? (num -= 1) : 1;
    let ind = listgoal.indexOf(recvd);
    // console.log("Ind RECEIVED IS: ", ind);
    let l1 = listgoal.slice(0, ind);
    setlistgoal(l1.concat(listgoal.slice(ind + 1, listgoal.length))); //SLICING ARRAYS
    // console.log("Hello world from long press !! curr item is ", recvd.value);
  };
  // const del_cur_item = () => {
  //   num > 0 ? (num -= 1) : 1;
  //   setlistgoal(listgoal.slice(0, listgoal.length - 1));
  //   // console.log('currenly after delete: ',listgoal);
  // };
  // const del_prev_item = () => {
  //   num > 0 ? (num -= 1) : 1;
  //   setlistgoal(listgoal.slice(1, listgoal.length));
  //   // console.log('currenly after delete_prev: ',listgoal);
  // };
  function Textmy(texts) {
    return "   " + texts;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./app/assets/Scene2.jpg")}
        style={{
          flex: 1,
          // alignContent: "flex-end",
          width: "100%",
          height: "100%",
          marginTop: "10%",
          // justifyContent: "center",
        }}
      >
        <Button
          title="Add new Goal"
          color="#6b6196"
          onPress={() => setModalState(true)}
        ></Button>
        <Buttons
          viewStyle={styles.newBut}
          add={set_list}
          delCur={(X = () => del_sel_item(listgoal[listgoal.length - 1]))}
          delPrev={(Y = () => del_sel_item(listgoal[0]))}
          modeManager={setModalState}
          mode={modalState}
          CloseButton={styles.close}
          layer={styles.invis}
          inputStyle={styles.inputContainer}
          goalManager={goalManager}
          inpGoal={inpGoal}
        ></Buttons>
        {/* <View style={styles.newBut}>
        <Button title="ADD" color="#66ff33" onPress={set_list}></Button>
        <View style={{ padding: 5 }}></View>
        <Button
          title="DELETE current"
          color="orange"
          onPress={del_cur_item}
        ></Button>
        <View style={{ padding: 5 }}></View>
        <Button
          title="DELETE old tasks"
          color="red"
          onPress={del_prev_item}
        ></Button>c
      </View> */}
        {/* <View style={styles.invis} />
        <View style={styles.inputContainer}>
          <CurrGoal handleGoal={goalManager} value={inpGoal} />
          {/* <TextInput style={styles.inputStyle}
      placeholder='Goals'
      placeholderTex tColor='#000000'
      onChangeText={goalManager}>
    </TextInput> */}
        {/* </View> */}
        {/* <ScrollView> */}
        {/* <View> */}
        <FlatList
          data={listgoal}
          style={styles.inputContainer}
          renderItem={(itemsr) => (
            <View>
              <Pressable
                onPress={() => console.log("St: ", modalState)}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "dodgerblue" : "skyblue",
                  },
                  styles.box,
                ]}
                onLongPress={() => del_sel_item(itemsr.item)}
              >
                {({ pressed }) => (
                  <Text style={styles.box}>
                    {pressed ? "Task Completed" : Textmy(itemsr.item.value)}
                  </Text>
                )}
                {/* <Text>
      {Textmy()}</Text> */}
              </Pressable>
            </View>
          )}
        >
          {/* {listgoal.map((goal) =><TouchableOpacity><Text style={styles.box}>
      {'   '}{goal}</Text></TouchableOpacity> )} */}
        </FlatList>
        {/* </View> */}
        {/* </ScrollView> */}
      </ImageBackground>
    </View>
    // <TehApp></TehApp>
    // <UselessTextInput/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efcabf",
    // justifyContent: "flex-start",
  },
  inputStyle: {
    width: "100%",
    backgroundColor: "#ffecec",
    bottom: 10,
  },
  inputContainer: {
    // backgroundColor: '#ffff66',
    width: "65%",
    alignSelf: "center",
    padding: 10,
  },
  newBut: {
    // backgroundColor: 'pink',
    // borderBottom Color: "#6b6196",
    // borderWidth: 10,
    // borderRadius: 30,

    // backgroundColor: "#5660a8",
    width: "80%",
    // marginTop: "28%",
    justifyContent: "flex-end",
    alignSelf: "center",
    alignItems: "center",
  },
  invis: {
    padding: 10,
  },
  box: {
    // backgroundColor: 'skyblue',
    height: 30,
    width: "100%",
    margin: 5,
  },
  close: {
    alignSelf: "flex-end",
    textAlign: "center",
    color: "red",
    fontSize: 16,
    fontFamily: "Roboto",
  },
});
