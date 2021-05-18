import React, { Component } from 'react';
import { Image } from 'react-native';
import 'react-native-gesture-handler';
import icon from '../assets/pics/homeicon.png';
 
class Logo extends Component {
  render(){
    return(
        <Image
            style={{width: 20, height: 20}}
            source={icon}
        />
    )
  } 
}
 
export default Logo;
 