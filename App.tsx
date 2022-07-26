import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Theme } from './src/styles/Theme';


import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';


export default function App() {
  const [ fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <NativeBaseProvider theme={Theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? <Routes/> : <Loading/> }
    </NativeBaseProvider>
  );
}


