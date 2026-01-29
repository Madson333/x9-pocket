import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';

import DenunciaDetailsScreen from '../screens/DenunciaDetailsScreen';
import { BadgeProvider } from '../state/BadgeContext';
import { Routes } from './constants';
import TabNavigator from './tab-navigator';

const Stack = createStackNavigator();

export default function StackNavigator() {
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
