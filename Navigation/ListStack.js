import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Components/Home';
import Details from '../Components/Details';
import Update from '../Components/Update';
export default function ListStack() {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      
    }}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Details' component={Details}/>
      <Stack.Screen name='Update' component={Update}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
 
 
});