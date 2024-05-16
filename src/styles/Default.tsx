import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    ex: {
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#222',
        fontSize: 24,
        fontWeight: 'bold'
    },

    bigText: {
        fontSize: 32
    },
    Text: {
        fontSize: 30,
        color: '#000000'
      },
      ImgBackground: {
        width: width,
        height: height
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
})