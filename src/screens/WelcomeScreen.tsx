import React from 'react'; 
import { View, ImageBackground, Text, Dimensions } from 'react-native';
import Default from '../styles/Default';

const { width, height } = Dimensions.get('window');

export default (props: any) => {
  return (
    <ImageBackground 
      source={require('../assets/images/4964195.jpg')} 
      style={{ width: width, height: height }}
      resizeMode='cover'
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color: '#000000'}}>Olá Mundo!</Text>
      </View>
    </ImageBackground>
  )
}
