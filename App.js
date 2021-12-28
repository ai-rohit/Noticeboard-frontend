import { StatusBar } from 'expo-status-bar';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import Container from './components/Container';
import GroupList from './components/GroupList';
import colors from './config/color';
import TabNav from './navigation/TabNav';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Register from './screens/Register';

export default function App() {
  
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" /> 
        {/* <TabNav/> */}
        <Register />
        {/* <Login/> */}
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
