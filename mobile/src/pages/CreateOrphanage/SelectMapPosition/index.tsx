import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, MapEvent } from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from "./styles";
import mapMarkerImg from "../../../images/Map-marker.png"

function SelectMapPosition() {

    const navigation = useNavigation();

    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

    function handleNextStep() {
        navigation.navigate('OrphanageData', { position });
    }

    function handleSelectMapPosition(event: MapEvent) {
        setPosition(event.nativeEvent.coordinate);
    }

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: -27.2092052,
                    longitude: -49.6401092,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
                style={styles.mapStyle}
                onPress={handleSelectMapPosition}
            >
                {position.latitude !== 0 && (
                    <Marker
                        icon={mapMarkerImg}
                        coordinate={{ latitude: position.latitude, longitude: position.longitude }}
                    />
                )}
            </MapView>

            {position.latitude !== 0 && (
                <RectButton style={styles.nextButton} onPress={handleNextStep}>
                    <Text style={styles.nextButtonText}>Próximo</Text>
                </RectButton>
            )}

        </View>
    )
}

export default SelectMapPosition;