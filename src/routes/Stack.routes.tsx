import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoadScreen from '../screens/LoadScreen/LoadScreen'
import SigniUpScreen from '../screens/SignUp/SignUp'
import SigniInScreen from '../screens/SingIn/SignIn'


const Stack = createStackNavigator();


export function StackRoutes() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen
                name="LoadScreen"
                component={LoadScreen}
            />
            <Stack.Screen
                name="SignIn"
                component={SigniInScreen}
            />
            <Stack.Screen
                name="SignUp"
                component={SigniUpScreen}
            />
        </Stack.Navigator>
    );
}