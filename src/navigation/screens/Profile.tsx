import { Text, useTheme } from "@rneui/themed";
import { View } from "react-native";

const Profile = () => {
    const {theme} = useTheme();

    return (
        <View style={{
            backgroundColor: theme.colors.background,
            flex: 1, 
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{color: theme.colors.primary, fontSize: 18, fontWeight: 'bold'}}>Profile page</Text>
        </View>
    )
}

export default Profile;
