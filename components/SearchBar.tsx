import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

type Props = {
  query: string;
  onChangeQuery: (query: string) => void;
};

const SearchBar: React.FC<Props> = ({ query, onChangeQuery }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search superheroes..."
        value={query}
        onChangeText={onChangeQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default SearchBar;