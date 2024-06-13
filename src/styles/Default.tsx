import { Dimensions, StyleSheet} from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

  pressable: {
    fontSize: 15,
    textAlign: 'right',
    color: '#2A58F2'
  },
  bigText: {
    fontSize: 32,
    color: '#000000'
  },
  InitialText: {
    fontSize: 21,
    color: '#000000',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  InitialText2: {
    fontSize: 20,
    color: '#000000',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    bottom: 75
  },
  ImgBackground: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Box1: {
    alignContent: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000000',
    fontSize: 20,
    width: width * 0.75
  },
  basicView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    width: width*0.65,
    height: 50,
    maxWidth: 300,
    color: '#000'
  },
  inputArea: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    width: width*0.65,
    height: 50,
    maxWidth: 300,
    color: '#000',
    flexDirection: 'row'
  },
  inputPreText: {
    textAlign: 'left',
    color: '#000'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle: {
    top: width*0.5,
    backgroundColor: 'blue',
    height: 40,
    width: 200,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFF',
    fontSize: 24
  },
  onRowButton: {
    top: width*0.525,
    flexDirection: 'row'
  }
})