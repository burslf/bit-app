import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../navigation/screens/Home';
import Settings from '../navigation/screens/Settings';
import Profile from '../navigation/screens/Profile';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Icon, Text, useTheme } from '@rneui/themed';
import Animated, { FadeInUp, FadeOutDown, Layout } from 'react-native-reanimated';

const BottomNav = createBottomTabNavigator();

const menu = {
    'Home': {
        name: 'Home',
        activeIcon: 'home',
        inactiveIcon: 'home-outline',
        type: 'ionicon'
    },
    'Profile': {
        name: 'Profile',
        activeIcon: 'ios-person',
        inactiveIcon: 'ios-person-outline',
        type: 'ionicon'
    },
    'Settings': {
        name: 'Settings',
        activeIcon: 'settings',
        inactiveIcon: 'settings-outline',
        type: 'ionicon'
    }
}
    

const Drawer = () => {
    const { theme, updateTheme } = useTheme();

    return (
      <BottomNav.Navigator initialRouteName='Home' tabBar={(props) => {
        return (
            <Animated.View entering={FadeInUp} exiting={FadeOutDown} layout={Layout.duration(200)}>
                <BottomTabBar {...props}/>
            </Animated.View>
        )
      }} 
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
            console.log(color)
            return <Icon name={focused ? menu[route.name].activeIcon: menu[route.name].inactiveIcon} size={size} color={color} type={menu[route.name].type}/>
            
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#ffffff',
        tabBarLabelStyle: {color: '#ffffff', marginBottom: 3},
        tabBarActiveBackgroundColor: theme.colors.background,
        tabBarInactiveBackgroundColor: theme.colors.background,
        headerShown: false,
      })}>
        <BottomNav.Screen name="Home" component={Home} />
        <BottomNav.Screen name="Profile" component={Profile} />
        
        <BottomNav.Screen name="Settings" component={Settings} />

      </BottomNav.Navigator>
  
    );
};

export default Drawer;
