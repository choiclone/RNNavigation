/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { StyleSheet, Text, View, Button} from 'react-native';
 import 'react-native-gesture-handler';
 
 class Home extends Component {
    render(){
      return(
          <View style={{
              flex:1,
              alignItems: 'center',
              justifyContent: 'center'
          }}>
              <Text>Home Screen</Text>
              <Button
                title="To User Screen"
                onPress={()=>{
                    this.props.navigation.navigate('User'
                    // , {
                    //     userIdx: 100,
                    //     userName: 'Hg',
                    //     userLastName: 'Choi'
                    // }
                    )
                }}
              />
              <Button
                title="Change the title"
                onPress={()=>
                  this.props.navigation.setOptions({title: "Changed!!!", headerStyle: {
                    backgroundColor: 'pink'
                  }, headerTintColor: 'red'})
                }
              />
          </View>
      )
    } 
  }
 
 const styles = StyleSheet.create({
   mainView: {
     flex: 1,
     backgroundColor: 'red',
   },
 });
 
 export default Home;
 