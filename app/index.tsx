import { Text, View, StyleSheet, ScrollView } from "react-native";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharactersScreen from './screens/Characters';
import LocationsScreen from './screens/Locations';
import EpisodesScreen from './screens/Episodes'
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Characters" component={CharactersScreen} />
        <Tab.Screen name="Locations" component={LocationsScreen} />
        <Tab.Screen name="Episodes" component={EpisodesScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
