import React, { useState } from 'react'; 
import {  Alert, Button,  ImageBackground, Pressable, Text, TextInput,  TouchableOpacity, View } from 'react-native';
import Default from '../../styles/Default';
import Database from '../../components/Database';

export default function LoginScreen({navigation}:any) {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const registerScreen = () => {
    navigation.navigate('Register')
  }

  const handleLogin = async () => {
    const user = await Database.FindUser(login);

    if (!login || !password) {
      Alert.alert('Erro', 'Prencha todos os campos')
    }
    else if (user && user.password == password) {
      navigation.navigate('Home');    
    } else {
      Alert.alert('Credenciais inválidas', 'Verifique seu e-mail e senha.');
    }
  }

  return (

    <ImageBackground
      source={require('../../assets/images/4964195.jpg')}
      style={Default.ImgBackground}
      resizeMode='cover'
    >
      <View>
        <Text style={Default.inputPreText}> Usuário</Text>
        <TextInput
          style={Default.input}
          placeholder='Username'
          placeholderTextColor={'#ACABAB'}
          value={login}
          onChangeText={setLogin}
          autoCorrect={false}
          autoCapitalize='none'
        />
      </View>

      <View>
        <Text style={Default.inputPreText}>Senha</Text>
        <TextInput
          style={Default.inputArea}
          placeholder='Password'
          placeholderTextColor={'#ACABAB'}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <TouchableOpacity onPress={() => Alert.alert('Erro','Função em desenvolvimento.')}>
          <Text style={{color: 'blue', textAlign: 'right'}}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Pressable 
          style={Default.buttonStyle}
          onPress={handleLogin}
        >
          <Text style={Default.buttonText}>Log In</Text>
        </Pressable>
        
      </View>

      <View style={Default.onRowButton}>
        <Text style={Default.inputPreText}>Não possui registro?</Text>
        <TouchableOpacity onPress={registerScreen}>
          <Text style={{color: 'blue'}}>Sing-up</Text>
        </TouchableOpacity>
      </View>


    </ImageBackground>
    
  )
}