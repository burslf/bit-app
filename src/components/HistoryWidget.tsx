import { Avatar, Button, Icon, ListItem, Text, useTheme } from "@rneui/themed";
import React, { useState } from "react";
import { StyleProp, TouchableHighlight, Image, View, ViewStyle, ImageSourcePropType, ScrollView, SectionList, FlatList, SafeAreaView } from "react-native";


const HistoryWidget = () => {
    const { theme } = useTheme();

    const styles = {
        cardContainer: {
            backgroundColor: theme.colors.secondary,
            flexGrow: 1,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 7,
        },
    }

    const data = [
        { id: '0', amount: '$500', avatarColor: "#6b51dc", avatarName: "YZ", name: "Yoel", icon: 'plus', iconType: 'entypo', isFirst: true },
        { id: '5', amount: '$37', avatarColor: "#347107", avatarName: "AZ", name: "Anaelle", icon: 'minus', iconType: 'entypo', },
        { id: '2', amount: '$52', avatarColor: "#c20370", avatarName: "JZ", name: "Jaclyn", icon: 'plus', iconType: 'entypo', },
        { id: '8', amount: '$1500', avatarColor: "#71066c", avatarName: "NZ", name: "Noam", icon: 'minus', iconType: 'entypo', },
        { id: '3', amount: '$38', avatarColor: "#9e4a2e", avatarName: "NZ", name: "Noam", icon: 'plus', iconType: 'entypo', },
        { id: '4', amount: '$98', avatarColor: "#9513b0", avatarName: "EZ", name: "Eden", icon: 'plus', iconType: 'entypo', },
        { id: '6', amount: '$5340', avatarColor: "#0eeabe", avatarName: "SZ", name: "Sylvie", icon: 'minus', iconType: 'entypo', },
        { id: '7', amount: '$109.8', avatarColor: "#f4502c", avatarName: "MP", name: "Marco", icon: 'minus', iconType: 'entypo', },
        { id: '1', amount: '$500', avatarColor: "#c3f3c0", avatarName: "PM", name: "Paul", icon: 'plus', iconType: 'entypo', },
        { id: '9', amount: '$500', avatarColor: "#71066c", avatarName: "MR", name: "Mirabel", icon: 'minus', iconType: 'entypo', isLast: true },
    ]

    return (
        <SafeAreaView style={styles.cardContainer}>
            <FlatList data={data} renderItem={({ item }) => {
                return (
                    <ListItem.Swipeable
                        rightContent={(reset) => (
                            <Button
                                // title="Delete"
                                onPress={() => reset()}
                                icon={{ name: 'paper-plane', type: 'ionicon', color: 'white' }}
                                buttonStyle={{ minHeight: '100%', backgroundColor: theme.colors.secondary }}
                            />
                        )}>
                        <Icon name={item.icon} type={item.iconType} />
                        <ListItem.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <ListItem.Title>{item.amount}</ListItem.Title>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <ListItem.Title style={{ marginHorizontal: 10 }}>{item.name}</ListItem.Title>
                                <Avatar
                                    title={item.avatarName}
                                    containerStyle={{ backgroundColor: item.avatarColor }}
                                    size={32}
                                    rounded
                                // source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                                />
                            </View>
                        </ListItem.Content>
                    </ListItem.Swipeable>
                )
            }}

                // contentContainerStyle={{}} style={{...(styles.cardContainer as ViewStyle)}} 
                keyExtractor={item => item.id} />

        </SafeAreaView>
    )
}

export default HistoryWidget;
