import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Container from './components/Container';
import GroupList from './components/GroupList';
import colors from './config/color';
import TabNav from './navigation/TabNav';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from "./navigation/AuthStack";
import { getData } from "./utils/authStorage";
import { useEffect, useState } from "react";

export default function App() {
  const [token, setToken] = useState(null);
  const getToken = async () => {
    const token = await getData("token");
    setToken(token);
  }
  useEffect(()=>{
    getToken();
  })
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" /> 
        {/* <TabNav/> */}
        
        {/* <Login/> */}
        {token? <TabNav/> : <AuthStack/>}
    </NavigationContainer>
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
  }
});
