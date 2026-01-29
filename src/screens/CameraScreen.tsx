import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Location from 'expo-location';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { addDenuncia } from '../data/denuncias';
import { cameraStyles } from '../styles/ui';

type CameraScreenProps = {
  navigation: any;
};

export default function CameraScreen({ navigation }: CameraScreenProps) {
  const cameraRef = useRef<CameraView>(null);
  const evidenceIdRef = useRef<string>(
    Math.floor(Math.random() * 1000).toString()
  );
  const [permission, requestPermission] = useCameraPermissions();
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const locationStatus =
          await Location.requestForegroundPermissionsAsync();
        if (locationStatus.status !== 'granted') {
          Alert.alert(
            'Atenção',
            'Sem localização, não saberemos onde o crime ocorreu.'
          );
        }
      } catch (e) {
        console.error('Erro ao pedir permissões de localização: ', e);
      }
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      setLoading(true);
      try {
        const data = await cameraRef.current.takePictureAsync({
          quality: 0.5,
          base64: false
        });
        setCapturedPhoto(data.uri);
      } catch (error: any) {
        console.error('Erro ao tirar foto:', error);
        Alert.alert('Erro', 'Falha ao capturar a imagem da desgraça.');
      } finally {
        setLoading(false);
      }
    }
  };

  const sendDenuncia = async () => {
    setLoading(true);
    try {
      let locationText = 'Localização desconhecida';
      let coords = { latitude: 0, longitude: 0 };

      const { status } = await Location.getForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        coords = location.coords;
        locationText = `Lat: ${coords.latitude.toFixed(4)}, Long: ${coords.longitude.toFixed(4)}`;
      }

      const newDenuncia = {
        id: Date.now().toString(),
        crime: note || 'Atividade Suspeita',
        local: locationText,
        img: capturedPhoto || '',
        timestamp: new Date().toLocaleTimeString(),
        ...coords
      };

      addDenuncia(newDenuncia);

      setCapturedPhoto(null);
      setNote('');
      evidenceIdRef.current = Math.floor(Math.random() * 1000).toString();
      navigation.navigate('Mural da Vergonha', { refresh: true });
    } catch (error: any) {
      console.error('Erro ao enviar denúncia:', error);
      Alert.alert('Erro', 'Não foi possível enviar a denúncia.');
    } finally {
      setLoading(false);
    }
  };
  if (!permission) {
    return (
      <View style={cameraStyles.container}>
        <ActivityIndicator size="large" color="#E63946" />
      </View>
    );
  }
  if (!permission.granted) {
    return (
      <View
        style={[
          cameraStyles.container,
          { justifyContent: 'center', alignItems: 'center' }
        ]}
      >
        <Text style={{ color: 'white', marginBottom: 20 }}>
          Precisamos de acesso à câmera para denunciar
        </Text>
        <TouchableOpacity
          style={cameraStyles.sendButton}
          onPress={requestPermission}
        >
          <Text style={cameraStyles.sendButtonText}>Permitir Câmera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (capturedPhoto) {
    return (
      <View style={cameraStyles.container}>
        <View style={cameraStyles.inputOverlay}>
          <Text
            style={{ color: 'white', marginBottom: 10, fontWeight: 'bold' }}
          >
            EVIDÊNCIA Nº {evidenceIdRef.current}
          </Text>
          <Image
            source={{ uri: capturedPhoto }}
            style={cameraStyles.previewImage}
          />
          <TextInput
            style={cameraStyles.textInput}
            placeholder="Descreva o delito (ex: Roubou grampeador)"
            placeholderTextColor="#999"
            value={note}
            onChangeText={setNote}
            autoFocus
          />
          <TouchableOpacity
            style={cameraStyles.sendButton}
            onPress={sendDenuncia}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={cameraStyles.sendButtonText}>
                PROTOCOLAR DENÚNCIA
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={cameraStyles.retryButton}
            onPress={() => setCapturedPhoto(null)}
          >
            <Text style={cameraStyles.retryText}>
              A foto ficou ruim, tirar outra
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={cameraStyles.container}>
      <View style={cameraStyles.topControls}>
        <TouchableOpacity
          style={cameraStyles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={cameraStyles.closeText}>✕</Text>
        </TouchableOpacity>
      </View>
      <CameraView style={cameraStyles.camera} ref={cameraRef} facing="back" />

      <View style={cameraStyles.controlsContainer}>
        <TouchableOpacity
          style={cameraStyles.captureBtnOuter}
          onPress={takePicture}
          activeOpacity={0.7}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#E63946" />
          ) : (
            <View style={cameraStyles.captureBtnInner} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
