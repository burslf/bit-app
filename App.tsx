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
import Contacts from "./src/components/Contacts";
import * as ContactsExpo from 'expo-contacts';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [contacts, setContacts] = useState([])

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const contactsData = [];

    (async () => {
        const { status } = await ContactsExpo.requestPermissionsAsync();
        if (status === 'granted') {
          const { data } = await ContactsExpo.getContactsAsync({
            fields: [ContactsExpo.Fields.FirstName, ContactsExpo.Fields.LastName, ContactsExpo.Fields.PhoneNumbers ],
          });
          if (data.length > 0) {
            const contactsFound = data
            for (const contact of contactsFound) {
                console.log(contact)
                contactsData.push({
                    id: contact.id,
                    name: `${contact.firstName ? contact.firstName : ""} ${contact.lastName ? contact.lastName : ""}`,
                    phone: contact.phoneNumbers ? contact.phoneNumbers[0].number : null
                })
            }
          }
        }
      })();
    setContacts(contactsData)
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
            <Stack.Screen name="Contacts" component={Contacts} initialParams={{contacts: contacts}}/>
            <Stack.Screen name="Drawer" component={Drawer} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
