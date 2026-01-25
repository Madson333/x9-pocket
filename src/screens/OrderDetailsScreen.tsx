import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrderDetailsScreen({ route }: any): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Order Details</Text>
      <Text>{JSON.stringify(route?.params || {})}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});