import React, { useState } from 'react'; 
import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import Default from '../../styles/Default';
 
export default (props: any) => {

  const inputLogin = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
  }

  return (

    <ImageBackground
      source={require('../../assets/images/4964195.jpg')}
      style={Default.ImgBackground}
      resizeMode='cover' 
    >
      <View>
        <TextInput
          style={styles.Box}
          placeholder='Email'
          value=''
        >

        </TextInput>
      </View>
      <View>

      </View>
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  Box: {
      bottom: -160,
      width: 350,
      height: 52,
      margin: 10,
      padding: 15,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: '#222',
      fontSize: 20
  },
  Texto: {
      right: 95,
      fontSize: 20,
      bottom: -165,
      color: '#000000'
  },

  Imagem: {
      bottom: -150,
      width: 150,
      height: 150
  },

  Texto2: {
      fontSize: 20,
      fontWeight: '900',
      color: '#000000',
      bottom: -140,
      alignItems: 'center',
      justifyContent: 'center'
  },

  Container: {
      bottom: 180,
      padding: 80,
      alignItems: 'center',
      justifyContent: 'center'
  },

  Container2: {
      bottom: 40,
      alignContent: 'center'
  },

  Container3: {
      bottom: 25,
      alignContent: 'center'
  }

});