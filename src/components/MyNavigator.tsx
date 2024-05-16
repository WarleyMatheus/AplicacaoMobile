import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../pages/home/WelcomeScreen';
import LoginScreen from '../pages/login/LoginScreen';
const Stack = createNativeStackNavigator();

const MyNavigator: React.FC = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default MyNavigator