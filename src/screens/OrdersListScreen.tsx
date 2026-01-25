import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function OrdersListScreen({ navigation }: any): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Orders List</Text>
      <Button title="Open Order" onPress={() => navigation.navigate('OrderDetails')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});