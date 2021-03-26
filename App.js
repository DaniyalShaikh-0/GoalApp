import React,{useState} from 'react';
import { StyleSheet,
   Text, View,TextInput,Button, 
   StatusBar,TouchableOpacity,
   ScrollView,FlatList } from 'react-native';
// import {Input, Button} from 'react-native-elements';
import UselessTextInput from './app/screens/NewScr.js';
let txt='';
let num=0;
export default function App() {
  const [inpGoal,funcInpGoal]=useState('');
  const [listgoal ,setlistgoal]=useState([]);
  const [key_unique,setkeyunique]=useState(0);
  const givekey=()=>{
    setkeyunique(key_unique+1);
  }
  const goalManager = (text_inp) =>{
    funcInpGoal(text_inp);
  }
  const saveSt = () =>{
    txt=txt+'\n'+inpGoal;
  }
  const set_list=() => {
    num++;
    givekey();
    setlistgoal(curgoals => [...curgoals,{key : key_unique, value:toString(num) + '  '+inpGoal}]);
    // console.log('currenly after adding: ',listgoal);
  }
  const del_cur_item=()=>{
    num > 0 ? num-=1 : 1;
    setlistgoal(listgoal.slice(0,listgoal.length-1));
    // console.log('currenly after delete: ',listgoal);
  }
  const del_prev_item=()=>{
    num > 0 ? num-=1 : 1;
    setlistgoal(listgoal.slice(1,listgoal.length));
    // console.log('currenly after delete_prev: ',listgoal);
  }
  return (
    <View style={styles.container}>
      <View style={styles.newBut}>
      <Button title='ADD' color='#66ff33' onPress={set_list}>
      </Button>
      <View style={{padding:5}}></View>
      <Button title='DELETE current' color='orange' onPress={del_cur_item}>
      </Button>
      <View style={{padding:5}}></View>
      <Button title='DELETE old tasks' color='red' onPress={del_prev_item}>
      </Button>
      </View>
      <View style={styles.invis}/>
      <View style={styles.inputContainer}>
      <TextInput style={styles.inputStyle} 
      placeholder='Goals'
      placeholderTextColor='#000000'
      onChangeText={goalManager}>
    </TextInput>
    </View>
    {/* <ScrollView> */}
    {/* <View> */}
      <FlatList data={listgoal} renderItem={itemsr => 
      (
        <View>
          <TouchableOpacity><Text style={styles.box}>
      {'   '}{num}
      { }{itemsr.item.value}</Text></TouchableOpacity>
        </View>
      )}>
    {/* {listgoal.map((goal) =><TouchableOpacity><Text style={styles.box}>
      {'   '}{goal}</Text></TouchableOpacity> )} */}
      </FlatList>
    {/* </View> */}
    {/* </ScrollView> */}
    </View>
    // <UselessTextInput/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffeee',
    justifyContent: 'flex-start',
  },
  inputStyle: {
    width: '100%',
    backgroundColor:'#ffcccc',
    bottom:10
  },
  inputContainer: {
    // backgroundColor: '#ffff66',
    width: '100%',
    alignItems: 'center',
    padding:10,
  },
  newBut: {
    // backgroundColor: 'pink',
    width: '100%',
    height:'32%',
    justifyContent:'flex-end',
  },
  invis: {
    padding: 10
  },
  box: {
    backgroundColor: 'skyblue',
    height:30,
    width:'100%',
    margin:5
  }
});
