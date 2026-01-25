// App.tsx - O porteiro do app
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';

import TabNavigator from './src/routes/tab-navigator';
import { BadgeProvider } from './src/state/BadgeContext';

// fonts
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Inter_400Regular } from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({ Montserrat_700Bold, Inter_400Regular });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <BadgeProvider>
        <TabNavigator />
      </BadgeProvider>
    </NavigationContainer>
  );
}
