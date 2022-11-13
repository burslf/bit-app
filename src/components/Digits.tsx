import { Button, Text, useTheme } from "@rneui/themed";
import { TouchableOpacity, View } from "react-native";
import { ListItem } from '@rneui/themed';
import { digitsContent } from "./contents/digits";

const Digits = (props) => {
    const { theme } = useTheme();

    const setInput = (val) => {
        let code = props.value ? props.value : ""

        if (props.value && val == "BACK") {
            const subCode = code.substring(0, code.length - 1)
            props.setCodeInput(subCode)
        } else {
            props.setCodeInput(code + val)
        }
    }

    return (
        <View
            style={{
                backgroundColor: theme.colors.background,
                flex: 1,
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <View
                style={{
                    width: "100%",
                    height: "20%",
                    alignItems: 'center'
                }}
            >
                <ListItem.Content style={{ flex: 1, alignItems: 'center', width: '80%' }} ><Text style={{ fontSize: 35 }}>{props.value}</Text></ListItem.Content>

            </View>

            <View
                style={{
                    width: "100%",
                    height: "60%",
                }}
            >
                {
                    digitsContent.map((row, index) => {
                        return (
                            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: '25%', width: '100%' }}>
                                {row.map((subrow, subIndex) => {
                                    return (
                                        <TouchableOpacity key={subIndex} style={{ width: '30%', height: '90%' }}>
                                            <Button onPress={() => setInput(subrow.value)} type="clear" color={theme.colors.background} buttonStyle={{ height: '100%', width: '100%' }}>
                                                {subrow.value}
                                            </Button>
                                        </TouchableOpacity>
                                    )
                                })}

                            </View>
                        )

                    })
                }

            </View>

            {<View>
                <Button onPress={() => props.onConfirm()} color={theme.colors.secondary} buttonStyle={{padding: 10}}>Confirm</Button>
            </View>}
        </View>
    )
}

export default Digits;