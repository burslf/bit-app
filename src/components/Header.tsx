import React from "react";
import {Icon, useTheme,  Header as Head, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const LeftHeader = () => {
    const navigation = useNavigation()
    return (
        <Text onPress={() => navigation.navigate(('home' as never))} style={{color: '#ffffff', fontWeight: 'bold', fontSize: 24}}>BIT</Text>
    );
};

const RightHeader = () => {
    const { theme, updateTheme } = useTheme();

    const toggleTheme = () => {
        const themeMode = theme.mode === 'dark' ? 'light' : 'dark';
        updateTheme({ mode: themeMode });
    };
    return (
        <Icon
        name="light-up"
        type="entypo"
        color="#ffffff"
        onPress={() => toggleTheme()}
      />
    );
};

const Header = () => {
    const { theme, updateTheme } = useTheme();

    return (
        <Head
            backgroundColor={theme.colors.background}
            placement="left"
            leftComponent={<LeftHeader/>}
            rightComponent={<RightHeader/>}
        />
    );
};

export default Header;
