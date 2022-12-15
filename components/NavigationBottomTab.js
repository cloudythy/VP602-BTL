import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/client/HomeScreen';
import NotificationScreen from '../screens/client/NotificationScreen';
import UserInfoScreen from '../screens/client/UserInfoScreen';
import WelcomeScreen from '../screens/client/WelcomeScreen';
import {StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function NavigationButtonIcons({name, focusedName, size, color, focused})
{
    let iconName = focused ? focusedName : name;
    return (
        <Ionicons name = {iconName} size = {size} color = {color} />
    );
}

export default function NavigationBottom()
{
	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName={global.welcomeScreen}
				screenOptions={styles.navigationSettings}
				backBehavior='history'>
				<Tab.Screen
					name = {global.welcomeScreen} 
					component = {WelcomeScreen}
					options = {{
						tabBarIcon: ({focused, color, size}) => ( 
							<NavigationButtonIcons 
									name = {'planet'} 
									focusedName = {'planet'} 
									focused = {focused}
									color = {color}
									size = {size}/>
						),
						headerShown: false,
					}}
				/>
				<Tab.Screen 
					name = {global.homeScreen} 
					component = {HomeScreen}
					options = {{
						tabBarIcon: ({focused, color, size}) => ( 
							<NavigationButtonIcons 
									name = {'home'} 
									focusedName = {'home'} 
									focused = {focused}
									color = {color}
									size = {size}/>
						),
						headerShown: false,
					}}
				/>
				<Tab.Screen 
					name = {global.notificationScreen} 
					component = {NotificationScreen}
					options = {{
						tabBarIcon: ({focused, color, size}) => ( 
							<NavigationButtonIcons 
								name = {'notifications'} 
								focusedName = {'notifications'} 
								focused = {focused}
								color = {color}
								size = {size}/>
						),
						headerShown: false,
					}}
				/>
				<Tab.Screen 
					name = {global.userInfoScreen} 
					component = {UserInfoScreen}
					options = {{
						tabBarLabel: 'Tải văn bản',
						tabBarIcon: ({focused, color, size}) => ( 
							<NavigationButtonIcons 
									name = {'person-circle'} 
									focusedName = {'person-circle'} 
									focused = {focused}
									color = {color}
									size = {size}/>
						),
						headerShown: false,
					}}
				/> 
			</Tab.Navigator>
		</NavigationContainer>
    );
}

const styles = StyleSheet.create({
    navigationSettings: {
        tabBarActiveTintColor: '#FDC52B',
        tabBarInactiveTintColor: 'grey',
    },
});

