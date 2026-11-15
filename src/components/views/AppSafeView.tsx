import { StatusBar, StyleSheet, View, ViewStyle, SafeAreaView } from 'react-native'
import React, { ReactNode } from 'react'
import { AppColors } from '../../styles/colors'
import { IS_ANDROID } from '../../constants/Constants'

interface AppSafeViewProps {
    children: ReactNode,
    style: ViewStyle
}

const AppSafeView: React.FC<AppSafeViewProps> = ({children, style}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  )
}

export default AppSafeView

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: AppColors.while,
        paddingTop: IS_ANDROID ? StatusBar.currentHeight: 0 || 0
    },
    container: {
        flex: 1
    }
})