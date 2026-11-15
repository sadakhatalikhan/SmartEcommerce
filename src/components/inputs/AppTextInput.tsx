import { StyleSheet, Text, TextInput, TextStyle, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/colors'

interface AppTextInputProps {
    value: string,
    onChangeText: (text: string) => void, 
    placeholder: string 
    secureTextEntry?: boolean 
    keyboardType: "default" | "email-address" | "numeric" 
    style: TextStyle
}

const AppTextInput: React.FC<AppTextInputProps> = ({value, onChangeText, placeholder, secureTextEntry, keyboardType, style}) => {
  return (
    <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.input, style]}
    >
    </TextInput>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
    input: {
        height: s(40),
        width: '100%',
        borderRadius: s(25),
        borderWidth: 1,
        borderColor: AppColors.boarderColor,
        paddingHorizontal: s(15),
        fontSize: s(16),
        marginBottom: vs(10),
        backgroundColor: AppColors.white

    }
})