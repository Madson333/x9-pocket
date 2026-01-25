import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/FeedScreen';
import CameraScreen from '../screens/CameraScreen';
import { Routes } from './constants';

const Tab = createBottomTabNavigator();

export function TabNavigator(): React.ReactElement {
  return (
    <Tab.Navigator screenOptions={{ headerStyle: { backgroundColor: '#FF0000' } }}>
      <Tab.Screen name={Routes.MuralDaVergonha} component={FeedScreen} />
      <Tab.Screen name={Routes.CapturarCrime} component={CameraScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;