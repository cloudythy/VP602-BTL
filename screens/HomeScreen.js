import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListOfRoomScreen from './ListOfRoomScreen';
import RoomDetailScreen from './RoomDetailScreen';

export default function HomeScreen() {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="List of room" options={{ headerShown: false }} component={ListOfRoomScreen}/>
      <Stack.Screen name="Room detail" component={RoomDetailScreen}/>
    </Stack.Navigator>
    
    
  );
}