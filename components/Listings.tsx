import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';


export default function Listings({category, ids}) {
  const listings = [
    { id: 1, title: 'Cozy Cabin in the Woods', url:'https://media.gettyimages.com/id/93463536/photo/log-cabin-in-the-forest.jpg?s=612x612&w=gi&k=20&c=11biv17nKCSCYw3zJ96oF7092sbjdfHA_xtqeSACHV0=' , price: '$100/night', category: 'Cabins' },
    { id: 2, title: 'Luxury Cabin with Mountain View', url:'https://media.gettyimages.com/id/108219206/photo/log-cabin-hidden-in-the-trees-by-the-lake-ohara-in-canada.jpg?s=612x612&w=gi&k=20&c=Fbrpof3ijCqANYPR_jxphlUp6yZhsFRTZV0YLZTeJQA=' , price: '$120/night', category: 'Cabins' },
    { id: 3, title: 'Rustic Cabin by the Lake', url:'https://media.gettyimages.com/id/162253610/photo/mountain-lodge-in-winter.jpg?s=612x612&w=gi&k=20&c=voPERUleaPMWAEa3p0SkZuh6M54GD7vPorI-lSFc5MI=' , price: '$80/night', category: 'Cabins' },
    { id: 4, title: 'Trendy Loft in Downtown', url:'https://media.gettyimages.com/id/1138529881/photo/cozy-loft-apartment-interior-in-downtown-los-angeles.jpg?s=612x612&w=gi&k=20&c=tekToDx1Fe3mPIA4wCfv3uSJ8LJkyls5Mjt36-7jT3o=' , price: '$150/night', category: 'Trending' },
    { id: 5, title: 'Modern Apartment with City View', url:'https://media.gettyimages.com/id/1365312361/photo/lounge-with-sofa-carpet-and-coffee-table-against-window-with-city-view-lobby-area.jpg?s=612x612&w=0&k=20&c=jgKa0TgO-_zh27mYNkzgTYl71lKe5dcqUwEGTXRRq_s=' , price: '$200/night', category: 'Trending' },
    { id: 6, title: 'Chic Studio in Hip Neighborhood', url:'https://media.gettyimages.com/id/1345193924/photo/messy-bed-in-studio-apartment.jpg?s=612x612&w=0&k=20&c=VRdbMFsLZmdGeNCzXiZgPy0sTZATowN20WmFrBb4zPk=' , price: '$140/night', category: 'Trending' },
    { id: 7, title: 'Fun House with Game Room', url:'https://media.gettyimages.com/id/567363213/photo/costa-mesa-ca-january-15-2015-landau-wanted-a-sophisticated-man-cave-where-he-could-relax.jpg?s=612x612&w=0&k=20&c=AY9np5AUy4BuE1mDUMqlQMlfAwp3fEd4Akv0MgradM8=' , price: '$180/night', category: 'Play' },
    { id: 8, title: 'Adventure Lodge with Climbing Wall', url:'https://media.gettyimages.com/id/877371188/photo/solo-session-at-the-climbing-centre.jpg?s=612x612&w=gi&k=20&c=ED0oz2VSWalogjZIZ_jN35tzdFklqG4b8E_mmNB3geU=' , price: '$210/night', category: 'Play' },
    { id: 9, title: 'Playful Bungalow with Pool', url: 'https://media.gettyimages.com/id/1415886887/photo/freshly-painted-craftsman-bungalow-house.jpg?s=612x612&w=0&k=20&c=lcwiyJqjUoIM0FfRb3TwV2BzUY8RS7oT9zFmZGv4nLI=' , price: '$190/night', category: 'Play' },
    { id: 10, title: 'Stylish Condo in City Center', url:'https://media.gettyimages.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iZ561ZIXOtPYGSzqlKUnLrliorreOYVz1pzu8WJmrnc=' , price: '$160/night', category: 'City' },
    { id: 11, title: 'Urban Flat with Balcony', url:'https://media.gettyimages.com/id/1188478555/photo/taking-care-of-my-plants.jpg?s=612x612&w=gi&k=20&c=Lhvx4xHM70wuYlEp-NsZ5HI-mKkb5Nbp4uLqsym3V4Q=' , price: '$170/night', category: 'City' },
    { id: 12, title: 'Downtown Penthouse with Skyline View', url:'https://media.gettyimages.com/id/1278121500/photo/luxury-loft-living-room-interior.jpg?s=612x612&w=0&k=20&c=yx0fuaQiaGXy3jaYMjpaAl1V2kPwKd4U9jgoZrXIsWs=' , price: '$220/night', category: 'City' },
    { id: 13, title: 'Beach House with Ocean View', url:'https://media.gettyimages.com/id/142457620/photo/elegant-house-on-beach.jpg?s=612x612&w=0&k=20&c=NfB2PbsVPJlVyC0OXUIScqWoDvtaNW5mDBT7d724RsA=' , price: '$200/night', category: 'Beachfront' },
    { id: 14, title: 'Seaside Cottage on Private Beach', url:'https://media.gettyimages.com/id/157403495/photo/beach-house-sun-room.jpg?s=612x612&w=0&k=20&c=uqtXG4-V8AS-zXjqluwmzPwqfwktTF9ALqnDYZuPDv4=' , price: '$210/night', category: 'Beachfront' },
    { id: 15, title: 'Oceanfront Villa with Infinity Pool', url:'https://media.gettyimages.com/id/820857770/photo/summer-relax-in-pool.jpg?s=612x612&w=gi&k=20&c=w7rDV7ucizi-mjmEuaaG16M_Tm1QoehIjjvjq6h4cXk=' , price: '$230/night', category: 'Beachfront' },
    { id: 16, title: 'Compact Tiny Home in Nature', url:'https://media.gettyimages.com/id/1322234427/photo/cheers-caucasian-couple-sharing-a-celebratory-toast-with-local-wine-chips-and-salsa-together.jpg?s=612x612&w=gi&k=20&c=z0IlYjU10RDLKJKqHAKdpdttKjN7d7zziuZsq1LQtO0=' , price: '$90/night', category: 'Tiny Homes' },
    { id: 17, title: 'Minimalist Tiny House', url:'https://media.gettyimages.com/id/1072247022/photo/young-couple-talking-in-doorway-of-their-tiny-house.jpg?s=612x612&w=0&k=20&c=dJ4dPc-zJNLuK9vcDl_WGH-H_DNluRd3X_9eClL14B8=' , price: '$85/night', category: 'Tiny Homes' },
    { id: 18, title: 'Eco-Friendly Tiny Home', url:'https://media.gettyimages.com/id/1051469438/photo/a-tiny-house-with-large-glass-windows-sits-in-the-backyard-surrounded-by-a-wooden-fence-and.jpg?s=612x612&w=gi&k=20&c=6_sWiFW74Ylj8REY0pF8rGDC7gSidDwjQO1DNf1dsmk=' , price: '$95/night', category: 'Tiny Homes' },
    { id: 19, title: 'Country Cottage with Garden View', url:'https://media.gettyimages.com/id/1096126904/photo/country-house-with-green-back-yard-in-sunny-summer-day.jpg?s=612x612&w=0&k=20&c=erjQPkC8VMZR8oxLk27mlZtk7EDu8fR4r9Eg2V_wu6E=' , price: '$110/night', category: 'Country Side' },
    { id: 20, title: 'Rustic Farmhouse in the Country', url:'https://media.gettyimages.com/id/1199735450/photo/dining-table-in-a-spanish-farmhouse.jpg?s=612x612&w=gi&k=20&c=kNI1l_c2W4TwOYu71wQJtamrvJAmDCae8dcl4TjwPSU=' , price: '$120/night', category: 'Country Side' },
    { id: 21, title: 'Charming Country Home with Orchard', url:'https://media.gettyimages.com/id/1269776313/photo/suburban-house.jpg?s=612x612&w=gi&k=20&c=r_hw-YI1AleWv2N6SPyz2vPJQCDpEFflS55u3uQqU5M=' , price: '$115/night', category: 'Country Side' },

  ];

 let filteredListings = listings;

  if (ids) {
    filteredListings = listings.filter(listing => ids.includes(listing.id));
  } else if (category) {
    filteredListings = listings.filter(listing => listing.category === category);
  }
  const navigation = useNavigation();

  const handleListingSelect = (listing) => {
    console.log(`Selected listing: ${listing.title}`);
    navigation.navigate('ListingDetails', { listing: listing });

  }
      return (
       <ScrollView style={{width: '100%' }}>
         {filteredListings.map((listing) => (
           <TouchableOpacity key={listing.id} onPress={() => handleListingSelect(listing)} style={{width: '100%' }}>
             <Text style={{ fontSize: 20 }} >{listing.title}</Text>
             <Text>{listing.price}</Text>
             <View style={{position: 'relative'}}>
               <Image source={{uri: listing.url}}
                      style={{width: '100%', height: 200}}
               />
               <AntDesign name="hearto" size={24} color="white" style={{position: 'absolute', top: 10, right: 10}} />
             </View>
           </TouchableOpacity>
         ))}
       </ScrollView>
      );
}
