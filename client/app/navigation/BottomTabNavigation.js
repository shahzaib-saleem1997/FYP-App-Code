import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

import HomeScreenStackNavigation from './HomeScreenStackNavigation';
import BookingScreen from '../screens/BookingScreen';
import ReportsScreen from '../screens/ReportsScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Tab = createBottomTabNavigator(); 

function MyTabs(){
    return(  
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreenStackNavigation} 
                options={{
                    tabBarIcon: ({ size, color }) => (
                      <Feather name="home" size={size} color={color} />
                    ),
                  }
                }

            />
            <Tab.Screen name="Booking" component={BookingScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                      <Feather name="calendar" size={size} color={color} />
                    ),
                  }
                }
            />
            <Tab.Screen name="Report" component={ReportsScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                      <Ionicons name="md-document-outline" size={size} color={color} />
                    ),
                  }
                }
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                      <FontAwesome name="user-o" size={size} color={color} />
                    ),
                  }
                }
            />
        </Tab.Navigator>
    )
}

export default MyTabs;