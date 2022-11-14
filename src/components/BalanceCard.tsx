import { Button, Icon, Text, useTheme} from "@rneui/themed";
import React, { useState } from "react";
import { StyleProp, TouchableHighlight, Image, View, ViewStyle, ImageSourcePropType, FlatList } from "react-native";
import { cryptoSolde, cryptoButtons, supportedCryptos } from "./contents/cryptoBalance";


const BalanceCard = () => {
    const {theme} = useTheme();
    const [activeSolde, setActiveSolde] = useState('btc') 
    const [soldes, setSolde] = useState(cryptoSolde)
    const [soldeTotal, setSoldeTotal] = useState('48,000.7');

    const [activeButton, setActiveButton] = useState("btc");

    const styles = {
        cardContainer: {
            backgroundColor: theme.colors.secondary, 
            flex:1, 
            borderTopRightRadius: 50, 
            borderBottomLeftRadius: 50, 
            justifyContent: 'space-around', 
            padding: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            
            elevation: 7,
    }
}

const activeStyle = {
    backgroundColor: theme.colors.background
}

const setActive = (b: string) => {
    setActiveButton(b)
    setActiveSolde(b)
}
    
    return (
        <View style={{...(styles.cardContainer as ViewStyle)}}>
            <>
            <View>
                <Text>Solde: </Text>
                <Text style={{fontSize:18, fontWeight: '700'}}>{soldeTotal}$</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems:'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>{soldes[activeSolde].amount} </Text>
                    <Text style={{fontSize: 16, fontWeight: '600'}}>{supportedCryptos[activeSolde].currency} </Text>
                </View>
                <View>
                    <Text style={{fontSize: 13, fontWeight: '600'}}> ({soldes[activeSolde].inUSD}$)</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <FlatList
                    horizontal
                    data={cryptoButtons}
                    renderItem={(item ) => {
                        return (
                            <Button key={item.index} onPress={()=> setActive(item.item.name)} type="clear" buttonStyle={activeButton == item.item.name && activeStyle} color={theme.colors.background} radius="xl" size='sm'>
                                <Image source={(item.item.image as ImageSourcePropType)}/>
                            </Button>
                        )
                    }}

                />
            </View>
            </>
        </View>
    )
}

export default BalanceCard;
