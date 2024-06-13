import React, { useState } from 'react'; 
import { Alert, Button, ImageBackground, Pressable, Text, TextInput, View } from 'react-native';
import Default from '../../styles/Default';
import Database from '../../components/Database';
 
export default function RegisterScreen({navigation}:any) {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    const newUser = {
      id: new Date().getTime(),
      name: name,
      email: email,
      password: password,
    }
    
    if (!name || !password || !email) {
      Alert.alert('Erro', 'Preencha todos os campos')
    }
    else {
      await Database.RegisterUser(newUser)
      navigation.navigate('Login')
    }
  }

  return (
    
    <ImageBackground
      source={require('../../assets/images/4964195.jpg')}
      style={Default.ImgBackground}
      resizeMode='cover'
    >
      
      <View style={Default.basicView}>
        <Text style={Default.InitialText2}> Para se registrar, preencha os campos abaixo.</Text>

        <View>
          <Text style={Default.inputPreText}>Nome de usuário:</Text>
          <TextInput
            style={Default.input}
            placeholder='Username'
            placeholderTextColor={'#ACABAB'}
            value={name}
            onChangeText={setName}
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>

        <View>
          <Text style={Default.inputPreText}>E-mail:</Text>
          <TextInput
            style={Default.input}
            placeholder='Username'
            placeholderTextColor={'#ACABAB'}
            value={email}
            onChangeText={setEmail}
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>

        <View>
        <Text style={Default.inputPreText}>Senha:</Text>
        <TextInput
          style={Default.inputArea}
          placeholder='Password'
          placeholderTextColor={'#ACABAB'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCorrect={false}
          autoCapitalize='none'
        />
      </View>
        <Pressable
        style={Default.buttonStyle}
        onPress={handleRegister}
        >
          <Text style={Default.buttonText}>Registrar</Text>
        </Pressable>
      </View>

    </ImageBackground>

  )
}