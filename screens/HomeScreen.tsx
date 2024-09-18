import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation';
import { Superhero } from '../types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const superheroes: Superhero[] = [
  { id: '1', name: 'Batman', description: 'The Dark Knight' },
  { id: '2', name: 'Superman', description: 'The Man of Steel' },
  // Añade más superhéroes aquí
];

function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={superheroes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('Details', { superhero: item })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;