import {Text, View, StyleSheet} from "react-native";
import { useEffect, useState } from 'react';
import {Permissions, Notifications} from "expo";
// import * as firebase from "firebase";

import Container from "../components/Container";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import { Title, SubTitle, AppText, KeyboardAvoidingView} from "../components/AppText";
import colors from "../config/color";
import { login } from "../api/authApi";
import { getData, storeData } from "../utils/authStorage";


function Login() {
  const [email, setEmail] = useState("");
  const [pwVisible, setPwVisible] = useState(false);
  const [password, setPassword] = useState("");

  // useEffect(()=>{
  //   registerPushNotifications();
  // })
  // const registerPushNotifications = async()=>{
  //   const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  //   const perm = await Permissions.getAsync(Permissions.NOTIFICATIONS)
  //   let finalStatus = status;

  //   if(status !== "granted"){
  //     const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     finalStatus = status;
  //   }

  //   if(finalStatus !== "granted"){
  //     return;
  //   }

  //   let token = await Notifications.getExpoPushTokenAsync();
  //   console.log(token);
  // }

  const onEmailChange = (text) =>{
    setEmail(text);
  }

  const onPassChange = (text) =>{
    setPassword(text);
  }

  const onShowPw = ()=>{
    setPwVisible(!pwVisible);
  }

  const handleLogin = async () => {
    try{
      const res = await login(email, password);
      console.log("response",res);
      if(res.status==="success"){
        storeData("token", res.data.token);
      }
      console.log(await getData("token"));
    }catch(err){
      console.error(err);
    }
  }
  return (
    <Container style={styles.container}>
      <View style={styles.form}>   
        <View style={styles.textContainer}>
          <Title customStyles={styles.header}>Let's sign you in.</Title>
          <SubTitle customStyles={styles.commonText}>Welcome.</SubTitle>
          <SubTitle customStyles={styles.commonText}>Lets Get Started!</SubTitle>
        </View>
        <View style={styles.inputContainer}> 
          <TextBox placeholder={"Phone, email or username"} onChange={onEmailChange} value={email}/>
          <TextBox
            isSecured={!pwVisible}
            placeholder={"Password"} 
            onChange={onPassChange} 
            value={password} 
            icon={{name:pwVisible?"eye-off":"eye", onPress:onShowPw}}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <AppText customStyles={styles.smallText}>Don't have an account? <AppText customStyles={styles.bold}>Register</AppText></AppText>
        <Button text="Sign In" customStyles={styles.btn} onPress={handleLogin}/>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width:"100%",
  },
  textContainer:{
    alignSelf:"center",
    width:"80%",
    marginTop:10
  },  
  smallText:{
    color: colors.dimWhite,
    alignSelf:"center",
  },
  bold:{
    color:colors.mainWhite,
    fontWeight: "bold",
  },
  header:{
    paddingBottom: 10,
  },
  form:{
    width:"100%",
    flex:2,
    justifyContent:"space-around",
  },
  inputContainer:{
    justifyContent:"center",
    alignItems:"center",
  },
  buttonContainer:{
    flex: 1,
    justifyContent:"flex-end",
    marginBottom:50
  },
  btn:{
    marginTop:20,
    marginBottom: 5
  }
})

export default Login;