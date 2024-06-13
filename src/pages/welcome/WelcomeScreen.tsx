import React from 'react'; 
import { View, ImageBackground, Text, Button } from 'react-native';
import Default from '../../styles/Default';

export default function WelcomeScreen({ navigation }: any) { 

  const secScreen = () => {
    navigation.navigate('Login')
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}]
    })
  }
  
  return (
    <ImageBackground 
      source={require('../../assets/images/4964195.jpg')} 
      style={Default.ImgBackground}
      resizeMode='cover'
    >
      <View style={Default.basicView}>
        <Text style={Default.bigText}>
          Olá! {"\n"}
        </Text> 
        <Text style={Default.InitialText}>
          Esta é uma aplicação desenvolvida para fins de atividades laborais. {"\n"}
          É expressamente proibida distribuição, revenda ou utilização não autorizada. {"\n"}  
        </Text>
        <Button
          title='Get Started'
          onPress={secScreen}
        />
      </View>
    </ImageBackground>
  )
}