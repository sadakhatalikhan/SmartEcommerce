import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSafeView from './src/components/views/AppSafeView';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppButton from './src/components/buttons/AppButton';

export default function App() {
  return (
    <>
      <FlashMessage position={"bottom"}/>
      <AppSafeView style={styles.container}>
      <AppButton title="showMessage"/>
      <AppText variant="medium">HelloWorld </AppText>
      <AppText onPress={
        () => {
          showMessage({
            message: "hello",
            color: "yellow",
            type: "success"
          })
        }
      }
        variant="bold">HelloWorld</AppText>
    </AppSafeView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
