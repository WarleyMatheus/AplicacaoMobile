import React from 'react'; 
import { View, ImageBackground, Text, Button } from 'react-native';
import Default from '../../styles/Default';

export default function WelcomeScreen({ navigation }: any) { 

  const secScreen = () => {
    navigation.navigate('Login'); 
  }
  
  return (
    <ImageBackground 
      source={require('../../assets/images/4964195.jpg')} 
      style={Default.ImgBackground}
      resizeMode='cover'
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={Default.Text}> Olá mundo! {"\n"} </Text>
        <Button
          title='Get Started'
          onPress={secScreen}
        />
      </View>
    </ImageBackground>
  )
}
