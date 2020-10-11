import { StatusBar } from 'expo-status-bar';
import React from 'react';


import Routes from './src/Routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Routes/>
    </>
  );
}