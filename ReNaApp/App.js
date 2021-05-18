import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/home';
import UserScreen from './src/user';
import Logo from './src/logo';

const Stack = createStackNavigator();
 
class App extends Component {
  // logoTitle = () => {
  //   return (
  //     <Image style={{width: 40, height: 40}} source={require('./assets/pics/homeicon.png')}/>
  //   )
  // }

  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#a4511e' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold', color: '#f3d612'},}}>
          <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home Screen", headerTitle: <Logo/>, 
            headerRight: () => {
               <Button title="Info" onPress={()=>alert("I am a Button")} color="red"/>
              }
            }}
          />
          <Stack.Screen name="User" component={UserScreen} initialParams={{ userIdx: 50, userName: 'Hg', userLastName: 'Choi'}}
            options={{
              title: 'User Screen',
              headerStyle: {
                backgroundColor: 'pink'
              },
              headerTintColor: 'red',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: 'purple'
              },
              headerBackTitle: 'BACK',
              headerRight: () => {
                <Button title="Go Back" onPress={()=>{
                  this.props.navigation.navigate('Home')
                }} color="red"/>
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } 
}

export default App;
