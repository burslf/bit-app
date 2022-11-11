import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { mainTheme } from './theme/theme';
import { ThemeProvider, Button, useTheme } from '@rneui/themed';
import Home from './src/navigation/screens/Home';
import Settings from './src/navigation/screens/Settings';
import Header from './src/components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawer from './src/components/Drawer';

const Stack = createNativeStackNavigator();

export default function App() {
  const {theme} = useTheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={mainTheme}>
      <StatusBar barStyle='default' backgroundColor={mainTheme.darkColors.background}/>
      <View style={{
        backgroundColor: mainTheme.darkColors.background,
        flex: 1, 
      }}>
        <NavigationContainer>
          <Drawer/>
         </NavigationContainer>
      </View>
      </ThemeProvider>

    </SafeAreaProvider>
  );
}
