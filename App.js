import { StatusBar } from 'expo-status-bar';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import GroupCard from './components/GroupCard';
import colors from './config/color';

import Login from './screens/Login';

export default function App() {
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <StatusBar style="auto" />
      {/* <Login /> */}
      <GroupCard/>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
