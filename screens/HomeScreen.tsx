import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation';
import { fetchSuperheroes } from '../redux';
import { RootState, AppDispatch } from '../redux/store';
import { Superhero } from '../types';
import SuperheroCard from '../components/SuperheroCard';
import SearchBar from '../components/SearchBar';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

function HomeScreen({ navigation }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const superheroes = useSelector((state: RootState) => state.superheroes.superheroes);
  const status = useSelector((state: RootState) => state.superheroes.status);
  const error = useSelector((state: RootState) => state.superheroes.error);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSuperheroes());
    }
  }, [dispatch, status]);

  const filteredSuperheroes = superheroes.filter((superhero) =>
    superhero.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar query={query} onChangeQuery={setQuery} />
      {status === 'loading' && <Text>Loading...</Text>}
      {status === 'failed' && <Text>Error: {error}</Text>}
      {status === 'succeeded' && (
        <FlatList
          data={filteredSuperheroes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <SuperheroCard
              superhero={item}
              onPress={() => navigation.navigate('Details', { superhero: item })}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;