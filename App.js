import { StatusBar } from 'expo-status-bar';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import Container from './components/Container';
import GroupCard from './components/GroupCard';
import GroupList from './components/GroupList';
import colors from './config/color';

import Login from './screens/Login';

export default function App() {
  
  return (
    <Container style={styles.container}>
    <KeyboardAvoidingView behavior='padding'>
        <GroupList/>
      <StatusBar style="auto" />
      {/* <Login /> */}
    </KeyboardAvoidingView>
      </Container>
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
