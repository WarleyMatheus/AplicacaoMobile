import React, {Component} from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";

export default class App extends Component {
  render(){

    return (

      <View style={styles.container}>
        <WelcomeScreen />
      </View>
      
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fonte: {
    fontSize: 40
  }
})