import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrdersListScreen from '@/src/screens/OrdersListScreen';
import OrderDetailsScreen from '@/src/screens/OrderDetailsScreen';

export enum ORDERS_STACK_ROUTES {
  ORDERS_LIST = 'OrdersList',
  ORDER_DETAILS = 'OrderDetails',
}

const Stack = createStackNavigator();

export function OrdersStackNavigator(): React.ReactElement {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ORDERS_STACK_ROUTES.ORDERS_LIST} component={OrdersListScreen} />
      <Stack.Screen name={ORDERS_STACK_ROUTES.ORDER_DETAILS} component={OrderDetailsScreen} />
    </Stack.Navigator>
  );
}
