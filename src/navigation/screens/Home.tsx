import { useTheme, Text } from "@rneui/themed";
import React from "react";
import { View } from "react-native";

const Home = ({navigation}) => {
    const { theme } = useTheme();

      
    return (
        <>
            <View style={{
                backgroundColor: theme.colors.background,
                flex: 1, 
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{color: theme.colors.primary, fontSize: 18, fontWeight: 'bold'}}>Homr page</Text>
            </View>
        </>
    )
}


export default Home;
function useState(arg0: number): [any, any] {
    throw new Error("Function not implemented.");
}

