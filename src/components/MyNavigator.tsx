import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../pages/welcome/WelcomeScreen';
import LoginScreen from '../pages/login/LoginScreen';
import RegisterScreen from '../pages/register/RegisterScreen';
import HomeScreen from '../pages/home/HomeScreen';
const Stack = createNativeStackNavigator();

const MyNavigator: React.FC = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default MyNavigator