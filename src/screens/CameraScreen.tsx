import type { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import type { RootStackParamList } from '../../App';

type CameraNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Capturar Crime'
>;

type Props = {
  navigation: CameraNavigationProp;
};

const CameraScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Capturar Crime</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  title: { fontSize: 20, marginBottom: 12 }
});
