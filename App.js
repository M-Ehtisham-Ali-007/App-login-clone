import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Button, TouchableHighlight, Text, View } from 'react-native';
import { ImageBackground } from 'react-native-web';
import { TextInput } from "react-native-web";

export default function App() {
  return (
    <View style={styles.parentContainer} >
      <ImageBackground style={styles.pic} resizeMode="cover" source={require("./assets/bg.png")}>
        {<View style={{ backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', flex: 0.1, }}>
          <Text style={styles.txt1}>Luigi's</Text>
        </View>}

        <Text style={styles.welcome_txt}>Welcome</Text>
        <Text style={styles.txt2}>Sign upto become our latest news</Text>

        <View style={styles.sign_up_container}>
          <Text style={styles.txt3}>Sign up for free</Text>
          <TextInput
            style={styles.input} placeholder="  Your Email" placeholderTextColor="black" autoCapitalize="none"></TextInput>
          <Text style={styles.spce}></Text>
          <TextInput style={styles.input} placeholder="  Your Password" placeholderTextColor="black" autoCapitalize="none" ></TextInput>
          <View style={styles.Button_container}>
            <Text style={styles.Button}>LOGIN</Text>
          </View>
        </View>
        <Text style={styles.txt}>❤️</Text>
        <Text style={styles.txt4}>Greeting From Italy</Text>
        <Text style={styles.txt2}>Luigi</Text>


      </ImageBackground>

    </View>

  );
}

const styles = StyleSheet.create({
  parentContainer: {
    alignItems: 'center',
    paddingTop: 40,
    alignSelf: "center",
    width: 300,
    height: 600,
    flex: 1,
    borderRadius: 40,
  },
  pic: {
    width: 300,
    height: 600,
  },
  pic_container: {
    paddingTop: 0,
    alignItems: 'center',
    alignSelf: "center",
    width: 300,
    height: 600,
    borderRadius: 40,
  },
  welcome_txt: {
    fontFamily: 'sansarif',
    fontSize: 40,
    paddingTop: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle:'italic',
    color: 'white',
  },
  txt:{
textAlign:"center",
paddingTop:10,
fontStyle:'italic',
  },
  txt1: {
    fontStyle:'italic',
    textAlign: 'center',
    fontFamily: 'sansarif',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  txt2: {
    textAlign: 'center',
    fontStyle:'italic',
    fontFamily: 'sansarif',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 40,
  },
  sign_up_container: {
    alignItems: 'center',
    alignSelf: "center",
    width: 250,
    height: 170,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  txt3: {
    fontStyle:'italic',
    textAlign: 'center',
    fontFamily: 'sansarif',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 20,
  },
  txt4: {
    textAlign: 'center',
    fontFamily: 'sansarif',
    fontStyle:'italic',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 20,
  },

  input: {
    width: 200,
    height: 35,
    fontSize: 12,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 5,
  },


  Button: {
    fontSize: 18,
    width: 120,
    lineHeight: 55,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "white",
  },
  Button_container: {
    width: 120,
    backgroundColor: 'blue',
  },
});