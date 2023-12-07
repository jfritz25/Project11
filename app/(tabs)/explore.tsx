import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TextInput, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import ListingDetails from '../../components/ListingDetails';
import Listings from '../../components/Listings'



function ExploreHeader({ navigation }) {
  const [searchText, setSearchText] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [isFocused, setIsFocused] = useState(false);


  const categoryTextStyle = (category) => {
    if (category === selectedCategory) {
      return [styles.categoryText, styles.selectedCategory];
    } else {
      return styles.categoryText;
    }
  };

  const handleSearch = () => {
    console.log(searchText);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleListingSelect = (listing) => {
    navigation.navigate('ListingDetails', { listing });
  };

  return (
    <View>
      <View style={styles.container}>
      <TouchableOpacity>
      <Ionicons name="ios-search" size={30} color="gray" style={styles.icon} />
      </TouchableOpacity>
      <TextInput
            style={styles.input}
            onChangeText={setSearchText}
            value={searchText}
            size = {40}
            placeholder={isFocused ? '' : 'Anywhere - Any week'}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholderTextColor = 'black'
          >
        </TextInput>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Map button pressed')}>
          <FontAwesome5 name="sliders-h" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategorySelect('Tiny Homes')}>
              <MaterialIcons name='home' size={40} color="black" />
              <Text style={categoryTextStyle('Tiny Homes')}>Tiny Homes</Text>
         </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategorySelect('Cabins')} >
          <Ionicons name="ios-home" size={40} color="black" />
          <Text style={categoryTextStyle('Cabins')}>Cabins</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategorySelect('Trending')} >
          <FontAwesome5 name="fire" size={40} color="black" />
          <Text style={categoryTextStyle('Trending')}>Trending</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategorySelect('Play')} >
          <FontAwesome5 name="gamepad" size={40} color="black" />
          <Text style={categoryTextStyle('Play')}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategorySelect('City')} >
          <FontAwesome5 name="city" size={40} color="black" />
          <Text style={categoryTextStyle('City')}>City</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategorySelect('Beachfront')} >
          <MaterialIcons name="beach-access" size={40} color="black" />
          <Text style={categoryTextStyle('Beachfront')}>Beachfront</Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategorySelect('Country Side')} >
          <MaterialIcons name="nature-people" size={40} color="black" />
          <Text style={categoryTextStyle('Country Side')}>Country Side</Text>
        </TouchableOpacity>

      </ScrollView>

      <Listings category={selectedCategory}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    width: 50,
    height: 50,
    color: 'black',
    backgroundColor: 'white',
  },
  button: {
    marginLeft: 10,
    backgroundColor: '#841584',
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  categoryButton: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 40,
  },
  categoryText: {
    marginTop: 5,
    color: 'black',
  },
  selectedCategory: {
      textDecorationLine: 'underline',
    },
});

const Stack = createStackNavigator();

export default function Explore() {
  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator initialRouteName="Explore">
        <Stack.Screen name="Explore" component={ExploreHeader} />
        <Stack.Screen name="ListingDetails" component={ListingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
