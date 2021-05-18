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
 
 class User extends Component {
   render(){

    const {params} = this.props.route;
    const userIdx = params ? params.userIdx: null;
    const userName = params ? params.userName: null;
    const userLastName = params ? params.userLastName: null;
    return(
        <View style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>User Screen</Text>
            <Button
            title="To Home Screen"
            onPress={()=>{
                this.props.navigation.navigate('Home')
            }}
            />
            <Text>User Idx: {JSON.stringify(userIdx)}</Text>
            <Text>User Idx: {JSON.stringify(userName)}</Text>
            <Text>User Idx: {JSON.stringify(userLastName)}</Text>
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
 
 export default User;
 