import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import mapMarkerImg from "../../images/Map-marker.png";
import { styles } from "./styles";

export default function OrphanagesMap() {

    const navigation = useNavigation()

    function handleNavigateToOrphanageDetails() {
        navigation.navigate("OrphanageDetails")
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
                <Marker
                    icon={mapMarkerImg}
                    coordinate={{
                        latitude: -26.9318621,
                        longitude: -49.1238646,
                    }}
                    calloutAnchor={{
                        x: 2.7,
                        y: 0.8
                    }}
                >
                    <Callout
                        tooltip
                        onPress={handleNavigateToOrphanageDetails}
                    >
                        <View style={styles.calloutContainer} >
                            <Text style={styles.calloutText}>Lar das meninas</Text>
                        </View>
                    </Callout>
                </Marker>

            </MapView>

            <View style={styles.footer} >
                <Text style={styles.footerText}>2 orfanatos encontrados</Text>
                <TouchableOpacity
                    style={styles.createOrphanageButton}
                    onPress={() => { }}
                >
                    <Feather name="plus" size={28} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    );
}