import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RectButton } from "react-native-gesture-handler"
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import api from "../../service/api"

import mapMarkerImg from "../../images/Map-marker.png";
import { styles } from "./styles";

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export default function OrphanagesMap() {

    const [orphanages, setOrphanages] = useState<Orphanage[]>([])

    useFocusEffect(() => {
        api.get("orphanages")
            .then(response => {
                setOrphanages(response.data);
            })
            .catch(reject => {
                console.warn(reject)
                alert("Erro ao consumir a API");
            })
    })

    const navigation = useNavigation()

    function handleNavigateToOrphanageDetails(id: number) {
        navigation.navigate("OrphanageDetails", { id })
    }

    function handleNavigateToCreateOrphanage() {
        navigation.navigate("SelectMapPosition")
    }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -26.9318621,
                    longitude: -49.1238646,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008
                }}
            >
                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            key={orphanage.id}
                            icon={mapMarkerImg}
                            coordinate={{
                                latitude: orphanage.latitude,
                                longitude: orphanage.longitude,
                            }}
                            calloutAnchor={{
                                x: 2.7,
                                y: 0.8
                            }}
                        >
                            <Callout
                                tooltip
                                onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}
                            >
                                <View style={styles.calloutContainer} >
                                    <Text style={styles.calloutText}>{orphanage.name}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    )
                })}

            </MapView>

            <View style={styles.footer} >
                <Text style={styles.footerText}>{orphanages.length} orfanatos encontrados</Text>
                <RectButton
                    style={styles.createOrphanageButton}
                    onPress={handleNavigateToCreateOrphanage}
                >
                    <Feather name="plus" size={28} color="#FFF" />
                </RectButton>
            </View>
        </View>
    );
}