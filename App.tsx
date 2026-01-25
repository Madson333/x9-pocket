// App.tsx - O porteiro do app
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from './src/screens/FeedScreen';
import CameraScreen from './src/screens/CameraScreen';

export type RootStackParamList = {
  'Mural da Vergonha': undefined;
  'Capturar Crime': undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#FF0000' } }}>
        <Stack.Screen name="Mural da Vergonha" component={FeedScreen} />
        <Stack.Screen name="Capturar Crime" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
