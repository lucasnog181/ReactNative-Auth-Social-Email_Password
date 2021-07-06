import React from "react";
import Dashboard from "../screens/Home/index"

import { createStackNavigator } from "@react-navigation/stack";
import TabRoutes from "./Tab.routes";
import Search from "../screens/Search";

const AppStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AppStack.Navigator headerMode="none">
        <AppStack.Screen
            name="Dashboard"
            component={TabRoutes}
        />

        <AppStack.Screen
          name="Search"
          component={Search}
        />
    </AppStack.Navigator>
);


export default AuthRoutes;