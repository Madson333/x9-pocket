import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { DENUNCIAS } from '../data/denuncias';
import { Routes } from '../routes/constants';
import { useBadge } from '../state/BadgeContext';
import { feedStyles } from '../styles/ui';

type Props = {
  navigation: any;
};

function FeedScreen({ navigation }: Props) {
  const { increment, reset } = useBadge();

  useFocusEffect(
    React.useCallback(() => {
      reset();
    }, [reset])
  );

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
            <Text style={feedStyles.timestampText}>{item.timestamp ?? ''}</Text>
          </View>
        </View>
        <View style={feedStyles.cardContent}>
          <Text style={feedStyles.crimeTitle}>{item.crime}</Text>
          <Text style={feedStyles.locationText}>Local: {item.local}</Text>
        </View>
      </TouchableOpacity>
    ),
    [handleNavigateDetails]
  );

  return (
    <View style={feedStyles.container}>
      <View style={feedStyles.header}>
        <Text style={feedStyles.headerTitle}>Mural da Vergonha</Text>
      </View>

      <View style={feedStyles.spacerTop} />

      <FlatList
        data={DENUNCIAS}
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
