import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListOfRoom from './ListOfRoom';
import RoomDetailScreen from './RoomDetailScreen';

export default function HomeScreen() {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="List of room" options={{ headerShown: false }} component={ListOfRoom}/>
      <Stack.Screen name="Room Detail" component={RoomDetailScreen}/>
    </Stack.Navigator>
    
    
  );
}