import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import SignUp from './SignUp';
import SignUpSuccessfully from './SignUpSuccessfully';

export default function LoginScreen() {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Log In" options={{ headerShown: false }} component={Login}/>
      <Stack.Screen name="Sign Up" options={{ headerShown: false }} component={SignUp}/>
      <Stack.Screen name="Sign Up Successfully" options={{ headerShown: false }} component={SignUpSuccessfully}/>

      
    </Stack.Navigator>
    
         
  );
}