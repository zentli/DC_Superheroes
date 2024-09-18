import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Superhero } from '../types';

type Props = {
  superhero: Superhero;
  onPress: () => void;
};

const SuperheroCard: React.FC<Props> = ({ superhero, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: superhero.imgUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{superhero.name}</Text>
        <Text style={styles.alterEgo}>{superhero.alterEgo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  info: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  alterEgo: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default SuperheroCard;