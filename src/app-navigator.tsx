import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigationRef } from './RootNavigation';
import { LINKING_OPTIONS } from './_config/routes/linking-options';
import { RootStackNavigator } from './routes/root-stack-navigator/root-stack-navigator';

export function AppNavigator(): React.ReactElement {
  return (
    <NavigationContainer linking={LINKING_OPTIONS} ref={navigationRef}>
      <RootStackNavigator />
    </NavigationContainer>
  );
}

export default AppNavigator;
