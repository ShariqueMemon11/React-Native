import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChatScreen from '../../src/Screens/ChatScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <ChatScreen/>
      <StatusBar style='Auto'/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop:80,
    paddingBottom:65,
  }, 


});
