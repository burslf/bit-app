import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { mainTheme } from "./theme/theme";
import { ThemeProvider } from "@rneui/themed";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./src/components/Drawer";
import GetStarted from "./src/navigation/screens/GetStarted";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Otp from "./src/navigation/screens/Otp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    // AsyncStorage.se('registered')

    AsyncStorage.getItem("registered", (err, res) => {
      if (res) {
        setIsLogged(true);
      }
    });
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={mainTheme}>
        <StatusBar
          barStyle="default"
          backgroundColor={mainTheme.darkColors.background}
        />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={isLogged ? 'Drawer' : 'GetStarted'}>
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="Drawer" component={Drawer} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
