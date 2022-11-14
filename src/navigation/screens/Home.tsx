import { useTheme, Text, Button, Icon } from "@rneui/themed";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import BalanceCard from "../../components/BalanceCard";
import HistoryWidget from "../../components/HistoryWidget";

const Home = ({navigation}) => {
    const { theme } = useTheme();

    
    return (
        <>
            <View style={{
                backgroundColor: theme.colors.background,
                flex: 1, 
                height: '100%',
                // alignItems: 'center',
                justifyContent: 'space-around',

            }}>
                <View style={{
                    height: '35%',
                    backgroundColor: theme.colors.background,
                    paddingHorizontal: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-around',                
                    alignItems: 'center'
                }}>
                
                    <View style={{width: '60%', height: 190}}>
                        <BalanceCard/>
                    </View>
                    <View style={{width: '40%', justifyContent:'center', flexDirection: 'row', alignItems:'flex-end'}}>
                        <TouchableOpacity activeOpacity={0.7} style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: 4, height:50, width: 50, backgroundColor: theme.colors.secondary, borderRadius: 50}}>
                            <Icon type="ant-design" name="plus" size={18}/>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: 4, height:50, width: 50, backgroundColor: theme.colors.secondary, borderRadius: 50}}>
                            <Icon type="octicon" name="arrow-switch" size={18}/>
                        </TouchableOpacity>
                    </View>
                </View> 


                <View style={{
                    height: '10%',
                    backgroundColor: theme.colors.background,
                    paddingHorizontal: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems:'flex-start'

                }}>
                    <View style={{width: '40%', justifyContent:'center', flexDirection: 'row', alignItems:'flex-end'}}>
                        <TouchableOpacity activeOpacity={0.7} style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: 4, height:50, width: 50, backgroundColor: theme.colors.secondary, borderRadius: 50}}>
                            <Icon type="font-awesome" name="qrcode" size={20}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Contacts')} activeOpacity={0.7} style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: 4, height:50, width: 50, backgroundColor: theme.colors.secondary, borderRadius: 50}}>
                            <Icon type="ionicon" name="paper-plane" size={20}/>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: 4, height:50, width: 50, backgroundColor: theme.colors.secondary, borderRadius: 50}}>
                            <Icon style={{transform: [{rotateY: '180deg'}, {rotateX: '180deg'}]}} type="ionicon" name="paper-plane" size={20}/>
                        </TouchableOpacity>
                        
                    </View>
                </View> 

                <View style={{
                    backgroundColor: theme.colors.background,
                    paddingHorizontal: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-around',                
                    height: '40%'
                }}>
                    <HistoryWidget/>
                </View> 
                
            </View>
        </>
    )
}


export default Home;
