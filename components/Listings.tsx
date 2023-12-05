import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


export default function Listings({category, onSelect}) {
  const listings = [
    { id: 1, title: 'Cozy Cabin in the Woods', price: '$100/night', category: 'Cabins' },
    { id: 2, title: 'Luxury Cabin with Mountain View', price: '$120/night', category: 'Cabins' },
    { id: 3, title: 'Rustic Cabin by the Lake', price: '$80/night', category: 'Cabins' },
    { id: 4, title: 'Trendy Loft in Downtown', price: '$150/night', category: 'Trending' },
    { id: 5, title: 'Modern Apartment with City View', price: '$200/night', category: 'Trending' },
    { id: 6, title: 'Chic Studio in Hip Neighborhood', price: '$140/night', category: 'Trending' },
    { id: 7, title: 'Fun House with Game Room', price: '$180/night', category: 'Play' },
    { id: 8, title: 'Adventure Lodge with Climbing Wall', price: '$210/night', category: 'Play' },
    { id: 9, title: 'Playful Bungalow with Pool', price: '$190/night', category: 'Play' },
    { id: 10, title: 'Stylish Condo in City Center', price: '$160/night', category: 'City' },
    { id: 11, title: 'Urban Flat with Balcony', price: '$170/night', category: 'City' },
    { id: 12, title: 'Downtown Penthouse with Skyline View', price: '$220/night', category: 'City' },
    { id: 13, title: 'Beach House with Ocean View', price: '$200/night', category: 'Beachfront' },
    { id: 14, title: 'Seaside Cottage on Private Beach', price: '$210/night', category: 'Beachfront' },
    { id: 15, title: 'Oceanfront Villa with Infinity Pool', price: '$230/night', category: 'Beachfront' },
  ];

  const filteredListings = listings.filter(listing => listing.category === category);

   const handleListingSelect = (listing) => {
      console.log(`Selected listing: ${listing.title}`);
    };
      return (
        <View>
          <Text>Listings</Text>
          {filteredListings.map((listing) => (
            <TouchableOpacity key={listing.id} onPress={() => onSelect(listing)}>
              <Text style={{ fontSize: 20 }}>{listing.title}</Text>
              <Text>{listing.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
}
