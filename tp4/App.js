import React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import AppNavigator from './src/navigation/AppNavigator'; 

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
