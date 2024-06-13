import React from 'react'; 
import { View, ImageBackground, Text, Button } from 'react-native';
import Default from '../../styles/Default';
import Clock from '../../components/Clock';

export default function HomeScreen({ navigation }: any) { 

  
  return (
    <ImageBackground 
      source={require('../../assets/images/4964195.jpg')} 
      style={Default.ImgBackground}
      resizeMode='cover'
    >
      <View style={Default.basicView}>
        <Clock />
      </View>
    </ImageBackground>
  )
}