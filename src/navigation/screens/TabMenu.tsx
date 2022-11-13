import { Button, Avatar, ListItem, useTheme, Tab, TabView, Text } from "@rneui/themed";
import React from "react";
import { ScrollView, StyleProp, View, ViewStyle } from "react-native";

const TabMenu = ({navigation}) => {
    const { theme } = useTheme();
    const [index, setIndex] = React.useState(0);

    const list = [
        {
          name: 'Amy Farha',
          avatar_url: 'https://i.pravatar.cc/128',
          subtitle: '🚕 to netanya',

        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://i.pravatar.cc/128',
          subtitle: '🍣🍣',
        },
        {
            name: 'Amy Farha',
            avatar_url: 'https://i.pravatar.cc/128',
            subtitle: '🎸 course',
          },
          {
            name: 'Chris Jackson',
            avatar_url: 'https://i.pravatar.cc/128',
            subtitle: 'Hotel',
          },
          {
            name: 'Amy Farha',
            avatar_url: 'https://i.pravatar.cc/128',
            subtitle: 'TIP to waiter',
          },
      ];
      
    return (
        <>
        <Tab
        value={index}
        onChange={setIndex}
        indicatorStyle={{
            backgroundColor: 'white',
        }}
        style={{backgroundColor: theme.colors.background}}
        
        >
            <Tab.Item
                title="Recent"
                titleStyle={{ fontSize: 16, color: theme.colors.primary }}
                icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
                
            />
            <Tab.Item
                title="Balance"
                titleStyle={{ fontSize: 16, color: theme.colors.primary }}
                icon={{ name: 'coins', type: 'font-awesome-5', color: 'white' }}
            />
            <Tab.Item
                title="Send"
                titleStyle={{ fontSize: 16, color: theme.colors.primary }}
                icon={{ name: 'send', type: 'font-awesome', color: 'white' }}
            />
        </Tab>
        <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ backgroundColor: theme.colors.background, width: '100%' }}>
            <View style={[{ 'width': '100%'}]}>
            {
                list.map((l, i) => (
                <ListItem.Swipeable key={i}
                rightContent={(reset) => (
                    <Button
                        title="Delete"
                        onPress={() => reset()}
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                    />
                    )}>
                    <Avatar source={{uri: l.avatar_url}} rounded={true}/>
                    <ListItem.Content>
                    <ListItem.Title style={{color: theme.colors.primary, fontSize: 18, fontWeight: 'bold'}}>{l.name}</ListItem.Title>
                    <ListItem.Subtitle style={{color: theme.colors.primary, fontSize: 16}}>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem.Swipeable>
                ))
            }
            </View>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: theme.colors.background, width: '100%' }}>
        <Text h1 style={{textAlign:'center'}}>Balance</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: theme.colors.background, width: '100%' }}>
      <Text h1 style={{textAlign:'center'}}>Buy Send</Text>
      </TabView.Item>
    </TabView>
    </>
        // </ScrollView>
    )
}


export default TabMenu;
