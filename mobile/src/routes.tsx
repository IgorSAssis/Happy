import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

import OrphanagesMap from "./pages/OrphanagesMap/index"
import OrphanageDetails from "./pages/OrphanageDetails/index"

const { Navigator, Screen } = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false
            }}>
                <Screen name="OrphanagesMap" component={OrphanagesMap} />
                <Screen name="OrphanageDetails" component={OrphanageDetails} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Routes;