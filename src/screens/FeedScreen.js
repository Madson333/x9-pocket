import { Button, StyleSheet, Text, View } from 'react-native';

export default function FeedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed da Vergonha</Text>
      <Button
        title="Nova Denúncia"
        onPress={() => navigation.navigate('Capturar Crime')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  title: { fontSize: 20, marginBottom: 12 }
});
