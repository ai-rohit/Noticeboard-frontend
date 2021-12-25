import {Text, View, StyleSheet} from "react-native";
import { useState } from 'react';

import Container from "../components/Container";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import { Title, SubTitle, AppText, KeyboardAvoidingView} from "../components/AppText";
import colors from "../config/color";

function Login() {
  const [email, setEmail] = useState("");
  const [pwVisible, setPwVisible] = useState(false);
  const onEmailChange = (text) =>{
    setEmail(text);
  }

  const onShowPw = ()=>{
    setPwVisible(!pwVisible);
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
          <TextBox placeholder={"Phone, email or username"}/>
          <TextBox
            isSecured={!pwVisible}
            placeholder={"Password"} 
            onChange={onEmailChange} 
            value={email} 
            icon={{name:pwVisible?"eye-off":"eye", onPress:onShowPw}}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <AppText customStyles={styles.smallText}>Don't have an account? <AppText customStyles={styles.bold}>Register</AppText></AppText>
        <Button text="Sign In" customStyles={styles.btn}/>
      </View>

    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width:"100%"
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
    justifyContent:"flex-end"
  },
  btn:{
    marginTop:20,
    marginBottom: 5
  }
})

export default Login;