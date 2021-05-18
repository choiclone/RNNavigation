import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/home';
import UserScreen from './src/user';

const Stack = createStackNavigator();

class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="User" component={UserScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  } 
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;