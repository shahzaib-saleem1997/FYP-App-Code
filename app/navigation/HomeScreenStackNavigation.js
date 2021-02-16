import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import BookADoctorScreen from '../screens/BookADoctorScreen';
import StayFitScreen from '../screens/StayFitScreen';
import EmergencyContactsScreen from '../screens/EmergencyContactsScreen';

const Stack = createStackNavigator();

export default function HomeScreenStackNavigation() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Book Doctor" component={BookADoctorScreen} />
        <Stack.Screen name="Stay Fit" component={StayFitScreen} />
        <Stack.Screen name="Emergency Contact" component={EmergencyContactsScreen} />
        
      </Stack.Navigator>
    )
}
