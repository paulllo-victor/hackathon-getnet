import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Rubik_300Light,Rubik_400Regular,Rubik_500Medium,Rubik_700Bold,useFonts} from '@expo-google-fonts/rubik';

import Routes from './src/Routes';
import { AppLoading } from 'expo';

export default function App() {
  const fontsLoading = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
  })
  if(!fontsLoading){
    return <AppLoading/>
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Routes/>
    </>
  );
}