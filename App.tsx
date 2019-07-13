import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Homescreen from './Homescreen';
import DetailsScreen from './DetailScreen';
import LoginScreen from './LoginScreen';

export default function App() {
  return (
    <AppContainer />
  );
}

const RootStack = createStackNavigator(
  {
    Home: Homescreen,
    Details: DetailsScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

const onPressLearnMore = function(){
  return (
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
