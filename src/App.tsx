import React, {Component} from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import Default from "./styles/Default";

export default class App extends Component {
  render(){

    return (

      <View style={Default.container}>
        <WelcomeScreen />
      </View>
      
    )
  }
}