import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../Navigation';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
  route: DetailsScreenRouteProp;
};

function DetailsScreen({ route }: Props) {
  const { superhero } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: superhero.imgUrl }} style={styles.image} />
      <Text style={styles.title}>{superhero.name}</Text>
      <Text style={styles.subtitle}>{superhero.alterEgo}</Text>
      <Text style={styles.description}>{superhero.description}</Text>
      <Text style={styles.comic}>{superhero.comic}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  subtitle: {
    fontSize: 20,
    fontStyle: 'italic',
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
  comic: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;