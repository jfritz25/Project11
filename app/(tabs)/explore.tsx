import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TextInput, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';



function ExploreHeader({ navigation }) {
  const [searchText, setSearchText] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState(null);

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
        <Ionicons name="ios-search" size={40} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          onChangeText={setSearchText}
          value={searchText}
          size = {40}
          placeholder="Anywhere - Any week"
        />
        <TouchableOpacity style={styles.button} onPress={() => console.log('Map button pressed')}>
          <FontAwesome5 name="sliders-h" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategorySelect('Cabins')} >
          <Ionicons name="ios-home" size={40} color="black" />
          <Text style={styles.categoryText}>Cabins</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategorySelect('Trending')} >
          <FontAwesome5 name="fire" size={40} color="black" />
          <Text style={styles.categoryText}>Trending</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategorySelect('Play')} >
          <FontAwesome5 name="gamepad" size={40} color="black" />
          <Text style={styles.categoryText}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategorySelect('City')} >
          <FontAwesome5 name="city" size={40} color="black" />
          <Text style={styles.categoryText}>City</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategorySelect('Beachfront')} >
          <MaterialIcons name="beach-access" size={40} color="black" />
          <Text style={styles.categoryText}>Beachfront</Text>
        </TouchableOpacity>

      </ScrollView>

      <Listings category={selectedCategory} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    margin: 10,
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
  },
  button: {
    marginLeft: 10,
    backgroundColor: '#841584',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  categoryButton: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 40,
  },
  categoryText: {
    marginTop: 5,
    color: 'gray',
  },
});

const Stack = createStackNavigator();

export default function Explore() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Explore">
        <Stack.Screen name="Explore" component={ExploreHeader} />
        <Stack.Screen name="ListingDetails" component={ListingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
