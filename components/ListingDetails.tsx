import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ListingDetails({ route }) {
  const { listing } = route.params;

  const handleReserve = () => {
    console.log(`Reserved listing: ${listing.title}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{listing.title}</Text>
      <Text style={styles.price}>{listing.price}</Text>
      <Button title="Reserve" onPress={handleReserve} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'gray',
  },
});

