import { Input, Text, useTheme } from "@rneui/themed";
import { CSSProperties, useRef, useState } from "react";
import { View, ViewStyle } from "react-native";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native";
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal'
import { CountryCode, Country } from '../countryTypes';

const GetStarted = ({navigation}) => {
  const { theme } = useTheme();
  // const navigation = useNavigation();

  // Refs
  const phoneRef = useRef(null);
  
  // States 
  const [countryCode, setCountryCode] = useState<CountryCode>('FR')
  const [countryModalOpen, setCountryModalOpen] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(true);

  // Styles
  const styles = {
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    phoneInput: {
      // borderColor: '#ddd',
      // borderWidth: 1, 
      borderRadius: 2,
      padding: 8,
      color: theme.colors.primary,
      width: '80%',
      marginBottom: 15
    },
    button: {
      padding: 9,
      borderRadius: 9
    }
  };

const onChangePhoneNumber = (value) => {
  const isValid = phoneRef.current.isValidNumber()
  setIsValidNumber(isValid)
}

const onPressFlag = () => {
  // countryPickerRef.current.openModal()
  setCountryModalOpen(true)
}

const selectCountry = (country:Country) => {
  setCountryCode(country.cca2)
  console.log(country)
  phoneRef.current.selectCountry(country.cca2.toLowerCase())
}

const confirmPhone = () => {
  if (isValidNumber){
    navigation.navigate('Otp', {phoneNumber: phoneRef.current.getValue()})
  }else{
    setIsValidNumber(false)
  }
}

  return (
    <Animatable.View style={(styles.container as ViewStyle)}>

      <CountryPicker
        countryCode={countryCode}
        withFilter={false}
        withFlag={true}
        onSelect={(value) => selectCountry(value)}
        visible={countryModalOpen}
        onClose={() => setCountryModalOpen(false)}
        withFlagButton={false}
      />
      <PhoneInput
        autoFormat
        style={{...styles.phoneInput, borderBottomColor: '#fff', borderBottomWidth: 1}}
        textStyle={{color: theme.colors.primary, fontSize: 18, fontWeight: '700'}} 
        
        ref={phoneRef}
        // onPressFlag={onPressFlag}
        flagStyle={{height:30, width: 30, borderRadius: 50, borderWidth: 2, borderColor: theme.colors.primary}}
        initialCountry={countryCode.toLowerCase()}
        onPressFlag={onPressFlag}
        onChangePhoneNumber={(value) => onChangePhoneNumber(value)}
      />
      {!isValidNumber && <View style={{marginBottom: 15}}><Text>Numer is not valid</Text></View>}
      <TouchableOpacity
        activeOpacity={0.7}
        style={{padding: 15, overflow: 'hidden', borderRadius: 9, backgroundColor: '#b44cff'}}
        onPress={() => confirmPhone()}
        >
        <Text>
          Continue
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default GetStarted;

        
// {...{
//   countryCode,
//   withFilter,
//   withFlag,
//   withCountryNameButton,
//   withAlphaFilter,
//   withCallingCode,
//   withEmoji,
//   onSelect,
// }}