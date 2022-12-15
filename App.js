import NavigationBottom from './components/NavigationBottomTab';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStartedScreen from './screens/GetStartedScreen';
import LoginScreen from './screens/LoginScreen'

export default function App() {
  global.homeScreen = 'Home';
  global.notificationScreen = 'Notification';
  global.welcomeScreen = 'Welcome';
  global.userInfoScreen = 'UserInfo';
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Get Started Screen" options={{ headerShown: false }} component={GetStartedScreen}/>
          <Stack.Screen name="Login Screen" options={{ headerShown: false }} component={LoginScreen}/>
          <Stack.Screen name="Main Screen" options={{ headerShown: false }} component={NavigationBottom}/>
        </Stack.Navigator>
      
    </NavigationContainer>
  );
}
