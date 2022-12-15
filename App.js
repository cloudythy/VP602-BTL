import NavigationBottom from './components/NavigationBottomTab';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import welcomeScreen from './screens/client/WelcomeScreen'

export default function App() {
  global.homeScreen = 'Home';
  global.notificationScreen = 'Notification';
  global.welcomeScreen = 'Welcome';
  global.userInfoScreen = 'UserInfo';


  return (
    <NavigationBottom/>
  );
}