import { Button, Text, useTheme } from "@rneui/themed";
import { TouchableOpacity, View } from "react-native";
import { ListItem } from '@rneui/themed';
import Digits from "../../components/Digits";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Otp = ({navigation}) => {
    const { theme } = useTheme();
    const [codeInput, setCodeInput] = useState(null);

    // const phoneNumber:string = route.params.phoneNumber;
    const confirmCode = () => {
        AsyncStorage.setItem('registered', 'true', (err) => {
            if (!err) navigation.navigate('Drawer')
        });
    }

    return (
        <Digits value={codeInput} setCodeInput={setCodeInput} onConfirm={()=> confirmCode()}/>
    );
};

export default Otp;
