import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login/Login';
import MainNavigation from './src/navigations/MainNavigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <NavigationContainer>
        <NativeBaseProvider>
          <MainNavigation/>
        </NativeBaseProvider>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
