import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AppText from './components/AppText';
import Button from "./components/Button";
import TextBox from './components/TextBox';

export default function App() {
  const [email, setEmail] = useState("");

  const onEmailChange = (text) =>{
    setEmail(text);
  }

  const onPress = (data)=>{
    console.log(data)
  }
  return (
    <View style={styles.container}>
      <Text style={{color:"#EDEDEE"}}>Hello</Text>
      <Text style={{color:"#333139"}}>asd</Text>
      <AppText>Hello</AppText>
      <StatusBar style="auto" />
      <TextBox placeholder={"Enter your email"} onChange={onEmailChange} value={email}/>
      {/* <TextInput/> */}
      <Button text="Sign In" onPress={onPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25242D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
