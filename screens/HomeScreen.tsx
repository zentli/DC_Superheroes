import React, { useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation';
import { fetchSuperheroes } from '../redux';
import { RootState, AppDispatch } from '../redux/store';
import { Superhero } from '../types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

function HomeScreen({ navigation }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const superheroes = useSelector((state: RootState) => state.superheroes.superheroes);
  const status = useSelector((state: RootState) => state.superheroes.status);
  const error = useSelector((state: RootState) => state.superheroes.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSuperheroes());
    }
  }, [dispatch, status]);

  return (
    <View style={styles.container}>
      {status === 'loading' && <Text>Loading...</Text>}
      {status === 'failed' && <Text>Error: {error}</Text>}
      {status === 'succeeded' && (
        <FlatList
          data={superheroes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Button
                title="View Details"
                onPress={() => navigation.navigate('Details', { superhero: item })}
              />
            </View>
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
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 14,
    marginTop: 8,
  },
  comic: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: 'bold',
  },
});

export default HomeScreen;