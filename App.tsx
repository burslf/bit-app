import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { mainTheme } from './theme/theme';
import { ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/components/Drawer';
import GetStarted from './src/navigation/screens/GetStarted';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    AsyncStorage.removeItem('registered')
    AsyncStorage.getItem('registered', ((err, res) => {
      if (res) {
        setIsLogged(true)
      }
    }))
  }, [])
  

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={mainTheme}>
      <StatusBar barStyle='default' backgroundColor={mainTheme.darkColors.background}/>
      
      { 
      isLogged ?
      <View style={{
        backgroundColor: mainTheme.darkColors.background,
        flex: 1, 
      }}>
        <NavigationContainer>
          <Drawer/>
         </NavigationContainer>
      </View>
      :
      <View style={{
        backgroundColor: mainTheme.darkColors.background,
        flex: 1, 
      }}>
        <GetStarted/>
      </View>
      }
      
      
      </ThemeProvider>

    </SafeAreaProvider>
  );
}
