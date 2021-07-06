import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';


import Home from '../screens/Home';
import Search from '../screens/Search';
import { theme } from '../theme';
import Favorite from '../screens/Favorite';
import Profile from '../screens/Profile';


const Tab = createBottomTabNavigator();


export default function TabRoutes() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: theme.colors.secondary30,
                inactiveTintColor: theme.colors.heading,
                style: {
                    backgroundColor: theme.colors.secondary100,
                    borderTopColor: theme.colors.secondary100,
                    paddingBottom: 5,
                    paddingTop: 5
                }
            }}>

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Ionicons
                            name="apps-outline"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Ionicons
                            name="search-outline"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Tab.Screen
                name="Favorites"
                component={Favorite}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Ionicons
                            name="bookmark-outline"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Ionicons
                            name="person-outline"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

        </Tab.Navigator>
    )
}