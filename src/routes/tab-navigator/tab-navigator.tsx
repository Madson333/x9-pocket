import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from '@/routes/constants';
import FeedScreen from '@/src/screens/FeedScreen';
import SearchScreen from '@/src/screens/SearchScreen';
import { OrdersStackNavigator } from '@/src/routes/orders-stack';
import MenuScreen from '@/src/screens/MenuScreen';
import type { TabParamList } from '@/routes/types';

export const Tab = createBottomTabNavigator<TabParamList>();

export function TabNavigator(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={FeedScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Orders" component={OrdersStackNavigator} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
  );
}
