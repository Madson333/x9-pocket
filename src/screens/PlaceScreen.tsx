import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlaceScreen({ route }: any): JSX.Element {
  const { placeId } = route?.params || {};
  return (
    <View style={styles.container}>
      <Text>Place Profile</Text>
      <Text>{placeId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});