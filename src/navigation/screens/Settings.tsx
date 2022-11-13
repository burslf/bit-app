import { Button, Text } from "@rneui/themed";
import { ScrollView, View } from "react-native";
import { useTheme } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = ({navigation}) => {
    const {theme} = useTheme();
    
    const onLogout = () => {
        AsyncStorage.removeItem('registered');
        navigation.navigate('GetStarted');
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow:1, alignItems:'center'}} style={{backgroundColor: theme.colors.background}}>
            <View style={{marginBottom: 80}}>

            </View>

            <View style={{width: '60%', position: 'absolute', bottom: 30}}>
                <Button onPress={onLogout} color={theme.colors.secondary} buttonStyle={{paddingVertical: 12}}>Logout</Button>
            </View>
        </ScrollView>
    )
}

export default Settings;