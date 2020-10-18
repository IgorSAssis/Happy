import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

import Header from "./components/Header/index"

import OrphanagesMap from "./pages/OrphanagesMap/index"
import OrphanageDetails from "./pages/OrphanageDetails/index"
import OrphanageData from "./pages/CreateOrphanage/OrphanageData/index"
import SelectMapPosition from "./pages/CreateOrphanage/SelectMapPosition/index"

const { Navigator, Screen } = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "#f2f3f5"
                }
            }}>
                <Screen 
                    name="OrphanagesMap" 
                    component={OrphanagesMap}
                    />
                <Screen 
                    name="OrphanageDetails" 
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Orfanato" />
                    }}
                    />
                <Screen 
                    name="OrphanageData" 
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados" />
                    }}
                    />
                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Selecione no mapa" />
                    }}
                    />
            </Navigator>
        </NavigationContainer>
    )
}

export default Routes;