import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
      <Text style={styles.title}>{superhero.name}</Text>
      <Text style={styles.description}>{superhero.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default DetailsScreen;