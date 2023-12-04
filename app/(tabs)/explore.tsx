import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import ExploreHeader from "../../components/ExploreHeader";
import Listings from "../../components/Listings";

export default function Explore() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ header: () => <ExploreHeader /> }} />
     
    </View>
  );
}
