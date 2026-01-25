// App.tsx - O porteiro do app
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';

import TabNavigator from './src/routes/tab-navigator';
import { BadgeProvider } from './src/state/BadgeContext';

export default function App() {
  return (
    <NavigationContainer>
      <BadgeProvider>
        <TabNavigator />
      </BadgeProvider>
    </NavigationContainer>
  );
}
