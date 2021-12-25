import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from 'react-native';

import Login from './screens/Login';

export default function App() {
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <StatusBar style="auto" />
      <Login />
    </KeyboardAvoidingView>
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
