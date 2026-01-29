import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import SearchFilter from '../components/SearchFilter';
import { DENUNCIAS, Denuncia } from '../data/denuncias';
import { Routes } from '../routes/constants';
import { useBadge } from '../state/BadgeContext';
import { feedStyles } from '../styles/ui';

type Props = {
  navigation: any;
};

function formatTime(timestamp?: string): string {
  if (!timestamp) return '';

  if (/^\d{2}:\d{2}$/.test(timestamp)) {
    return timestamp;
  }

  try {
    const date = new Date(timestamp);
    if (!isNaN(date.getTime())) {
      return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
    }
  } catch (e) {}

  return timestamp;
}

function FeedScreen({ navigation }: Props) {
  const { reset } = useBadge();

  const [refreshKey, setRefreshKey] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');

  const [filteredDenuncias, setFilteredDenuncias] =
    React.useState<Denuncia[]>(DENUNCIAS);

  useFocusEffect(
    React.useCallback(() => {
      reset();
      setRefreshKey((prev) => prev + 1);

      const filtered = DENUNCIAS.filter((denuncia) =>
        denuncia.crime.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredDenuncias(filtered);
    }, [reset, searchTerm])
  );
  useEffect(() => {
    const filtered = DENUNCIAS.filter((denuncia) =>
      denuncia.crime.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredDenuncias(filtered);
  }, [searchTerm]);

  const handleNavigateDetails = React.useCallback(
    (item: any) => {
      navigation.navigate(Routes.DenunciaDetails, { item });
    },
    [navigation]
  );

  const handleNavigateCamera = React.useCallback(() => {
    navigation.navigate(Routes.CapturarCrime);
  }, [navigation]);

  const renderItem = React.useCallback(
    ({ item }: any) => (
      <TouchableOpacity
        style={feedStyles.card}
        onPress={() => handleNavigateDetails(item)}
      >
        <View style={feedStyles.cardImageWrapper}>
          <Image source={{ uri: item.img }} style={feedStyles.image} />
          <View style={feedStyles.timestamp}>
            <Text style={feedStyles.timestampText}>
              {formatTime(item.timestamp)}
            </Text>
          </View>
        </View>
        <View style={feedStyles.cardContent}>
          <Text style={feedStyles.crimeTitle}>{item.crime}</Text>
          <Text style={feedStyles.locationText}>Local: {item.local}</Text>
        </View>
      </TouchableOpacity>
    ),
    [handleNavigateDetails, formatTime]
  );

  return (
    <View style={feedStyles.container}>
      <View style={feedStyles.header}>
        <Text style={feedStyles.headerTitle}>Mural da Vergonha</Text>
      </View>

      <View style={feedStyles.filters}>
        <SearchFilter
          placeholder="Busque pelo crime..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      <FlatList
        key={refreshKey}
        data={filteredDenuncias}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 140 }}
      />

      <TouchableOpacity style={feedStyles.fab} onPress={handleNavigateCamera}>
        <Text style={feedStyles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
export default FeedScreen;
