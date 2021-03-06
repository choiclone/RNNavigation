import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import 'react-native-gesture-handler';

class User extends Component {
  headerStyle = () => {
    this.props.navigation.setOptions({
        title: "Customizing", 
        headerStyle: {
          backgroundColor: 'blue'
        },
        headerTintColor: 'yellow',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'green'
        },
        headerBackTitle: 'BACK'
      })  
  }

render(){
  // this.headerStyle();
  const {params} = this.props.route;
  const userIdx = params ? params.userIdx: null;
  const userName = params ? params.userName: null;
  const userLastName = params ? params.userLastName: null;

  return(
      <View style={styles.userView}>
          <Text>User Screen</Text>
          <Button
          title="To Home Screen"
          onPress={()=>{
              this.props.navigation.navigate('Home')
          }}
          />
          <Text>User Idx: {JSON.stringify(userIdx)}</Text>
          <Text>User Name: {JSON.stringify(userName)}</Text>
          <Text>User LastName: {JSON.stringify(userLastName)}</Text>
      </View>
    )
  } 
}

const styles = StyleSheet.create({
userView: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
},
});

export default User;
