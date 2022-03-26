import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Modal, View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import {SubTitle, Title} from "./components/AppText"
import colors from './config/color';
import TabNav from './navigation/TabNav';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from "./navigation/AuthStack";
import { getData, removeData } from "./utils/authStorage";
import { useEffect, useState } from "react";
import { ModalContext } from "./context/context";

export default function App() {
  const [token, setToken] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const getToken = async () => {
    const token = await getData("token");
    setToken(token);
  }

  const handleLogout = () =>{
    removeData("token");
  }
  useEffect(()=>{
    getToken();
  })
  return (
    <ModalContext.Provider value={{isProfileModalOpen, setIsProfileModalOpen}}>
      <NavigationContainer style={styles.container}>
        <StatusBar style="auto" /> 
          {/* <TabNav/> */}
          
          {/* <Login/> */}
          {/* {token? <TabNav/> : <AuthStack/>} */}
          <TabNav/>
          <Modal visible={isProfileModalOpen} transparent={true} style={{backgroundColor:"red"}} animationType="slide">
            <TouchableOpacity style={styles.modalContainer} onPress={() => { setIsProfileModalOpen(false)}}>
                <TouchableOpacity style={styles.modal} onPress={() => console.log('do nothing')} activeOpacity={1} >
                  <Title>Rohit Shrestha</Title>
                  <TouchableOpacity onPress={()=>{console.log("Profile")}}>
                    <SubTitle>Profile</SubTitle>
                  </TouchableOpacity>
                  <View style={{width:"90%", height:1, backgroundColor:colors.dimWhite}}/>
                  <TouchableOpacity onPress={()=>{console.log("Profile")}}>
                    <SubTitle>App Settings</SubTitle>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{console.log("Profile")}}>
                    <SubTitle>Help and FAQs</SubTitle>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{handleLogout()}}>
                    <SubTitle>Logout</SubTitle>
                  </TouchableOpacity>
                </TouchableOpacity>
              </TouchableOpacity>
          </Modal>
      </NavigationContainer>
    </ModalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardView:{
    flex:1,
    width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"rgba(0,0,0,0.7)"
  },
  modal: {
    width: "100%",
    height: "40%",
    backgroundColor:colors.mainDark,
    position:"absolute",
    bottom:0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
});
