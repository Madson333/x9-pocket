import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { feedStyles } from '../styles/ui';

type SearchFilterProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
};

const SearchFilter = ({ value, onChangeText, placeholder }: SearchFilterProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={feedStyles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={() => onChangeText('')} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>X</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
    padding: 10,
  },
  clearButtonText: {
    color: '#999',
    fontSize: 16,
  },
});

export default SearchFilter;
