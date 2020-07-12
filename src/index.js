import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
import { StatusBar } from 'react-native';
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Navigation />
    </NavigationContainer>
  );
}
