import React, { useState, useContext } from 'react';
import { View, StyleSheet, SectionList, SafeAreaView } from 'react-native';
import {
  ListItem,
  Divider,
  SearchBar,
  Icon,
  SearchBarProps,
  Switch,
  useTheme,
  Text,
  Button
} from '@rneui/themed';
import { SettingData, SettingsData, settingsData } from '../contents/settings';

const sections: SettingsData[] = settingsData

type SetttingsComponentProps = {};

const Settings: React.FunctionComponent<SetttingsComponentProps> = ({navigation}) => {
  const [switched, setSwitched] = useState(false);
  const {theme} = useTheme()

  const onSwitchEventHandler = (value: boolean) => {
    setSwitched(value);
  };

  const renderItem = ({
    item: {
      title,
      backgroundColor,
      icon,
      rightTitle,
      hideChevron,
      checkbox,
      type,
    },
  }: {
    item: SettingData;
  }) => (
    <ListItem containerStyle={{ paddingVertical: 5, marginVertical: 8 }} key={title}>
      <Icon
        type={type}
        name={icon}
        size={20}
        color="white"
        containerStyle={{
          backgroundColor,
          width: 28,
          height: 28,
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Content right>
        <ListItem.Title right style={{color: theme.colors.primary}}>{rightTitle}</ListItem.Title>
      </ListItem.Content>
      {!hideChevron && <ListItem.Chevron />}
      {checkbox && (
        <Switch value={switched} onValueChange={onSwitchEventHandler} />
      )}
    </ListItem>
  );

  const keyExtractor: (item: SettingData, index: number) => string = (
    item: SettingData,
    index: React.Key
  ) => {
    return index.toString();
  };

  return (
    <SafeAreaView style={{
        backgroundColor: theme.colors.background,
    }}>
      <SectionList
        style={[{width: '100%', marginBottom: 30}]}
        keyExtractor={keyExtractor}
        sections={sections}
        renderItem={renderItem}
        // renderSectionHeader={renderSectionHeader}
        // ItemSeparatorComponent={ItemSeparatorComponent}
        // SectionSeparatorComponent={Divider}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFF4',
  },
  separatorComponentLight: {
    backgroundColor: 'white',
  },
  separatorComponentDark: {
    backgroundColor: 'black',
  },
  separator: {
    marginLeft: 58,
  },
  headerSection: {
    // height: 30,
  },
});

export default Settings;