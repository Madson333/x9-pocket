// App.tsx - O porteiro do app
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { Routes } from './src/routes/constants';
import CameraScreen from './src/screens/CameraScreen';
import FeedScreen from './src/screens/FeedScreen';

import TabNavigator from './src/routes/tab-navigator';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
