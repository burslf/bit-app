import { Avatar, Button, Icon, ListItem, Text, useTheme } from "@rneui/themed";
import React, { useState, useEffect } from "react";
import { StyleProp, TouchableHighlight, Image, View, ViewStyle, ImageSourcePropType, ScrollView, SectionList, FlatList, SafeAreaView, TouchableOpacity } from "react-native";

const Contacts = ({navigation, route}) => {
    const { theme } = useTheme();

    useEffect(() => {
        console.log(route.params.contacts)
    }, [])

  
    const styles = {
        cardContainer: {
            backgroundColor: theme.colors.secondary,
            flexGrow: 1,
            height: '70%',
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

    ]

    

    return (
        <View style={{backgroundColor: theme.colors.background, flex: 1}}>
            <View style={{height: '30%', justifyContent:'center', alignItems: 'center'}}>
                <Text style={{fontSize:20}}>Choose a contact</Text>
            </View>
            <SafeAreaView style={styles.cardContainer}>
                <FlatList data={route.params.contacts} renderItem={({ item }) => {
                    return (
                            <TouchableOpacity activeOpacity={0.8}  >
                                <ListItem.Content style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, backgroundColor: theme.colors.background}}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-around' }}>
                                        <ListItem.Title style={{ marginHorizontal: 10 }}>{item.name}</ListItem.Title>
                                        <ListItem.Title style={{ marginHorizontal: 10 }}>{item.phone}</ListItem.Title> 
                                    </View>
                                </ListItem.Content>
                            </TouchableOpacity>
                    )
                }}

                    // contentContainerStyle={{}} style={{...(styles.cardContainer as ViewStyle)}} 
                    keyExtractor={item => item.id} />

            </SafeAreaView>
        </View>
        
    )
}

export default Contacts;
