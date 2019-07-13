import React from 'react';
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';

export default class HomeScreen extends React.Component<{navigation: any},{}> {
    
    render() {

    const { navigation } = this.props;
    const param = navigation.state.params;

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>{JSON.stringify(param)}</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Details')}
        >Go to Details Screen</Button>
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          style={{marginTop: 16}}
        >Logout</Button>
      </View>
      );
    }
  }