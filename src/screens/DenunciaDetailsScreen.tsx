import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { feedStyles } from '../styles/ui';

export default function DenunciaDetailsScreen({ route, navigation }: any) {
  const { item } = route.params || {};

  const region = {
    latitude: item.latitude ?? -23.5505,
    longitude: item.longitude ?? -46.6333,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  };

  return (
    <View style={feedStyles.container}>
      <View style={feedStyles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: 20,
            top: 50,
            zIndex: 10,
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: 20,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>
            ←
          </Text>
        </TouchableOpacity>
        <Text style={feedStyles.headerTitle}>Evidência #{item.id}</Text>
      </View>

      <View style={feedStyles.spacerTop} />

      <View
        style={{
          marginHorizontal: 16,
          borderRadius: 15,
          overflow: 'hidden',
          elevation: 5
        }}
      >
        <MapView
          style={{ width: '100%', height: 250 }}
          initialRegion={region}
          mapType="standard"
        >
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude
            }}
            title="Cena do Crime"
            description="Local da infração"
          />
        </MapView>
      </View>

      <View style={feedStyles.spacerTop} />

      <View style={feedStyles.card}>
        <View style={feedStyles.cardContent}>
          <Text style={feedStyles.crimeTitle}>{item.crime}</Text>
          <Text style={feedStyles.locationText}>📍 {item.local}</Text>

          <View style={{ marginTop: 15 }}>
            <Text
              style={[feedStyles.locationText, { fontSize: 12, color: '#999' }]}
            >
              HORÁRIO DA INFRAÇÃO
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#1D3557',
                marginTop: 5
              }}
            >
              {item.timestamp ?? 'Horário desconhecido'}
            </Text>
          </View>

          {item.latitude && (
            <View style={{ marginTop: 15 }}>
              <Text
                style={[
                  feedStyles.locationText,
                  { fontSize: 12, color: '#999' }
                ]}
              >
                COORDENADAS GPS
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'monospace',
                  color: '#666',
                  marginTop: 5
                }}
              >
                Lat: {item.latitude?.toFixed(6)}
                {'\n'}
                Long: {item.longitude?.toFixed(6)}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
