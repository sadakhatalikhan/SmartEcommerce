import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSafeView from './src/components/views/AppSafeView';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppButton from './src/components/buttons/AppButton';
import AppTextInput from './src/components/inputs/AppTextInput';

export default function App() {
  return (
    <>
      <FlashMessage position={"bottom"}/>
      <AppSafeView style={styles.container}>
        <AppTextInput placeholder='Enter name'/>
      </AppSafeView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
