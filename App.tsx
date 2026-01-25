import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './src/routes/constants';
import TabNavigator from './src/routes/tab-navigator';
import DenunciaDetailsScreen from './src/screens/DenunciaDetailsScreen';
import { BadgeProvider } from './src/state/BadgeContext';

// fonts
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({ Montserrat_700Bold, Inter_400Regular });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <BadgeProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routes.DenunciaDetails}
            component={DenunciaDetailsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </BadgeProvider>
    </NavigationContainer>
  );
}
