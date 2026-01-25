import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CameraScreen from '../screens/CameraScreen';
import FeedScreen from '../screens/FeedScreen';
import { Routes } from './constants';
import type { TabParamList } from './types';
import { useBadge } from '../state/BadgeContext';

const Tab = createBottomTabNavigator<TabParamList>();

export function TabNavigator(): React.ReactElement {
  const { badgeCount } = useBadge();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#FF0000',
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const name = route.name === Routes.MuralDaVergonha ? 'list' : 'camera';
          return <Ionicons name={name as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={Routes.MuralDaVergonha}
        component={FeedScreen}
        options={{ tabBarBadge: badgeCount > 0 ? badgeCount : undefined }}
      />
      <Tab.Screen name={Routes.CapturarCrime} component={CameraScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
