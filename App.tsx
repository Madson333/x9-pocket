// App.tsx - O porteiro do app
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { Routes } from './src/routes/constants';
import CameraScreen from './src/screens/CameraScreen';
import FeedScreen from './src/screens/FeedScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: '#FF0000' } }}
      >
        <Stack.Screen name={Routes.MuralDaVergonha} component={FeedScreen} />
        <Stack.Screen name={Routes.CapturarCrime} component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
