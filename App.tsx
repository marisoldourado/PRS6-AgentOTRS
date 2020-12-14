
import React from 'react';
import { StatusBar } from 'react-native';

import Route from './src/routes'

import { useFonts, Ubuntu_700Bold, Ubuntu_300Light } from '@expo-google-fonts/ubuntu';

export default function App() {

  const [fontsLoaded] = useFonts({
      Ubuntu_700Bold,
      Ubuntu_300Light
  });

  return (
    <>
      <StatusBar/>
      <Route/>
    </>
  );
}
