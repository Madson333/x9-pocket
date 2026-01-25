// App.tsx - O porteiro do app
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import CameraScreen from './src/screens/CameraScreen';
import FeedScreen from './src/screens/FeedScreen';

const Stack = createStackNavigator();

export default function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: '#FF0000' } }}
      >
        <Stack.Screen name="Mural da Vergonha" component={FeedScreen} />
        <Stack.Screen name="Capturar Crime" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
