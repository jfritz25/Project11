import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from '../FirebaseConfig';
import { AntDesign, FontAwesome5, Feather } from '@expo/vector-icons';

// This file is when an individual listing is selected and the user has the chance to reserve the booking
export default function ListingDetails({ route }) { //Takes the route which is the navigation params
  const { listing } = route.params;

  const handleReserve = () => {
    const reservationsRef = collection(db, 'reservations');
    const newReservationRef = doc(reservationsRef, String(listing.id));
    //Adds reserved listing to firestore
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
//Displays the layout for the listing details page with a reserve button
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{listing.title}</Text>
      <Text style={styles.price}>{listing.price}</Text>
     <View style={{position: 'relative'}}>
       <Image source={{uri: listing.url}}
              style={{width: 420, height: 420}}
       />
       <TouchableOpacity style={{position: 'absolute', top: 10, right: 10}}>
         <AntDesign name="hearto" size={40} color="white"  />
       </TouchableOpacity>
       <TouchableOpacity style={{position: 'absolute', top: 10, right: 70}}>
         <Feather name="share" size={40} color="white"  />
       </TouchableOpacity>
     </View>

      <TouchableOpacity style={styles.button} onPress={handleReserve}>
      <Text style={styles.buttonText}>Reserve</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
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
   button: {
       position: 'absolute',
       bottom: 0,
       right: 0,
       backgroundColor: 'red',
       borderRadius: 10,
       padding: 10,
       shadowColor: "#000",
       width: 200,
       height: 50,
       shadowOffset: {
         width: 0,
         height: 2,
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.84,
       elevation: 5,
     },
     buttonText: {
       color: 'white',
       textAlign: 'center',
       fontSize: 24,
     }
});

