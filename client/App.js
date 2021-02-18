/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from './app/navigation/BottomTabNavigation';
import Header from './app/components/Header';

const App = () => {
  return (
    <>
      <Header/>
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
    </>
      
  );
};

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  }
  
});

export default App;
