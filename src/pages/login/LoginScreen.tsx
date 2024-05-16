import React from 'react'; 
import { Dimensions, ImageBackground, Text, TextInput, View } from 'react-native';
import Default from '../../styles/Default';
 
export default (props: any) => {
  return (

    <ImageBackground
      source={require('../../assets/images/4964195.jpg')}
      style={Default.ImgBackground}
      resizeMode='cover'
    >
      <View>
        <TextInput></TextInput>
      </View>
    </ImageBackground>
    
  )
}