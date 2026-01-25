import type { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import type { RootStackParamList } from '../../App';

type FeedNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Mural da Vergonha'
>;

type Props = {
  navigation: FeedNavigationProp;
};

const FeedScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed da Vergonha</Text>
      <Button
        title="Nova Denúncia"
        onPress={() => navigation.navigate('Capturar Crime')}
      />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  title: { fontSize: 20, marginBottom: 12 }
});
