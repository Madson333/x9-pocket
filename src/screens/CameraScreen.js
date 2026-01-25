import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CameraScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Capturar Crime</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 20, marginBottom: 12 },
});
