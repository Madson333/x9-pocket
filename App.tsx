import React from 'react';
import 'react-native-gesture-handler';

// fonts
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import StackNavigator from './src/routes/stack-navigator';

export default function App() {
  const [fontsLoaded] = useFonts({ Montserrat_700Bold, Inter_400Regular });

  if (!fontsLoaded) return null;

  return <StackNavigator />;
}
