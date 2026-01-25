import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from '../tab-navigator/tab-navigator';
import PlaceScreen from '@/src/screens/PlaceScreen';
import { Routes } from '@/routes/constants';

import type { RootStackParamList } from '@/routes/types';

const Stack = createStackNavigator<RootStackParamList>();

const SCREEN_OPTIONS = {
  gestureEnabled: true,
  headerShown: false,
};

export function RootStackNavigator(): React.ReactElement {
  return (
    <Stack.Navigator screenOptions={SCREEN_OPTIONS}>
      <Stack.Screen name={Routes.tabMainFlow} component={TabNavigator} />
      <Stack.Screen name={Routes.capture} component={require('@/src/screens/CameraScreen').default} />
      <Stack.Group screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen name={Routes.placeProfile} component={PlaceScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
