import type { TabParamList } from '@/routes/types';
import { OrdersStackNavigator } from '@/src/routes/orders-stack';
import FeedScreen from '@/src/screens/FeedScreen';
import MenuScreen from '@/src/screens/MenuScreen';
import SearchScreen from '@/src/screens/SearchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

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
