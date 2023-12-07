import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import Listings from '../../components/Listings';
import { db } from '../../FirebaseConfig';
//Holds all the trips that the user reserved
export default function Trips() {
  const [listings, setListings] = useState([]);
//Reads listings that are in the database
  useEffect(() => {
    const listingsCollection = collection(db, 'reservations');
    const getData = onSnapshot(listingsCollection, (snapshot) => {
      const listingsList = snapshot.docs.map(doc => doc.data());
      setListings(listingsList);
    });

    return () => getData();
  }, []);
//Generates display of those items, filtering on ids that are in the database
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
