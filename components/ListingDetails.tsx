import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from '../FirebaseConfig';

export default function ListingDetails({ route }) {
  const { listing } = route.params;

  const handleReserve = () => {
    const reservationsRef = collection(db, 'reservations');
    const newReservationRef = doc(reservationsRef, String(listing.id));

    setDoc(newReservationRef, {
      listingId: listing.id,
      listingTitle: listing.title,
      listingUrl: listing.url,
      listingPrice: listing.price,
      listingCategory: listing.category,
      timestamp: String(Date.now())
    }).then(() => {
      console.log('Reservation made!');
    }).catch((error) => {
      console.error('Error making reservation: ', error);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{listing.title}</Text>
      <Text style={styles.price}>{listing.price}</Text>
      <Image source={{uri: listing.url}}
                 style={{width: 200, height: 200}}
               />
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

