import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';

interface AppTextProps {
    children: React.ReactNode;
    style?: TextStyle | TextStyle[];
    variant?: "medium" | "bold";
}

const AppText: React.FC<AppTextProps> = ({ children, style, variant = "medium", ...rest }) => {
  return (
    <Text {...rest} style={[ styles[variant], style]}>
        {children}
    </Text>
  )
}

export default AppText

const styles = StyleSheet.create({
    medium: {
        fontSize: s(16),
        color: AppColors.black,
    },
    bold: {
        fontSize: s(18),
        color: AppColors.black,
    }
})