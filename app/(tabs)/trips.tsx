import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import Listings from '../../components/Listings';
import { db } from '../../FirebaseConfig';

export default function Trips() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const listingsCollection = collection(db, 'reservations');
    const unsubscribe = onSnapshot(listingsCollection, (snapshot) => {
      const listingsList = snapshot.docs.map(doc => doc.data());
      setListings(listingsList);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
  <View>
  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Upcoming Reservations</Text>
    <ScrollView>
      {listings.map((listing) => (
        <Listings
          key={listing.listingId}
          ids={[listing.listingId]}
        />
      ))}
    </ScrollView>
    </View>
  );
}
