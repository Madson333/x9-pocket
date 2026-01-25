import type { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useBadge } from '../state/BadgeContext';
import { Routes } from '../routes/constants';

type FeedNavigationProp = StackNavigationProp<any>;

type Props = {
  navigation: FeedNavigationProp;
};

const FeedScreen: React.FC<Props> = ({ navigation }) => {
  const { increment, reset } = useBadge();

  useFocusEffect(
    React.useCallback(() => {
      // clear badge when entering the feed
      reset();
    }, [reset])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed da Vergonha</Text>
      <Button
        title="Nova Denúncia"
        onPress={() => navigation.navigate(Routes.CapturarCrime)}
      />
      <View style={{ height: 12 }} />
      <Button title="Simular Notificação" onPress={() => increment()} />
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
