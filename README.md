# 🕵️‍♂️ X9-Pocket

> **O App do 007 do RH** - Denúncias anônimas com estilo e discrição

Um aplicativo React Native para denúncias anônimas no ambiente corporativo, desenvolvido com Expo e TypeScript. Permite capturar evidências fotográficas, registrar localização GPS e visualizar denúncias em um feed estilizado.

## 🎯 Funcionalidades

### 📱 Core Features

- **Feed de Denúncias**: Lista scrollable com todas as infrações registradas
- **Captura de Evidências**: Camera integrada com preview e geolocalização automática
- **Mapa de Infrações**: Visualização da localização exata de cada denúncia
- **Interface Profissional**: Design System "Pânico Corporativo" com cores consistentes

### 🔧 Funcionalidades Técnicas

- ✅ Navigation com Stack + Bottom Tabs
- ✅ Permissões de câmera e localização
- ✅ Estado global com Context API
- ✅ TypeScript para type safety
- ✅ Hooks modernos (useState, useEffect, useCallback)
- ✅ FlatList otimizada para performance
- ✅ Posicionamento absoluto para overlays

## 🛠️ Stack Tecnológica

### Frontend

- **React Native** - Framework mobile
- **Expo SDK 54** - Plataforma de desenvolvimento
- **TypeScript** - Type safety e melhor DX
- **React Navigation 6** - Stack + Tab navigation

### Packages Principais

```json
{
  "expo-camera": "~17.0.10", // Captura de fotos
  "react-native-maps": "1.20.1", // Mapas e markers
  "expo-location": "^19.0.8", // GPS e geolocalização
  "@react-navigation/bottom-tabs": "^7.4.0",
  "@react-navigation/stack": "^7.6.16"
}
```

## 📁 Estrutura do Projeto

```
src/
├── data/
│   └── denuncias.ts          # Mock data e persistência local
├── routes/
│   ├── constants.ts          # Constantes de navegação
│   ├── tab-navigator.tsx     # Bottom Tab Navigator
│   └── types.ts             # Tipos de navegação
├── screens/
│   ├── FeedScreen.tsx       # Lista de denúncias
│   ├── CameraScreen.tsx     # Captura de evidências
│   └── DenunciaDetailsScreen.tsx  # Detalhes + mapa
├── state/
│   └── BadgeContext.tsx     # Context para badges de notificação
└── styles/
    └── ui.ts               # Design System + estilos
```

## 🎨 Design System

### Cores "Pânico Corporativo"

```typescript
const COLORS = {
  danger: '#E63946', // Vermelho Sangue
  dark: '#1D3557', // Azul "Reunião de Demissão"
  light: '#F1FAEE', // Branco Inocência
  glass: 'rgba(29, 53, 87, 0.8)', // Vidro Fumê
  success: '#2A9D8F' // Verde "Dedo-Duro Confirmado"
};
```

### Componentes Estilizados

- **Headers**: Background azul escuro com título vermelho
- **Cards**: Brancos com bordas arredondadas e sombra
- **Buttons**: Vermelho nuclear com texto em maiúsculo
- **Camera Overlay**: Preto semi-transparente cyberpunk

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js 18+
- Expo CLI
- iOS Simulator / Android Emulator
- Dispositivo físico (opcional)

### Setup do Projeto

```bash
# Clone o repositório
git clone <repo-url>
cd x9-pocket

# Instale as dependências
npm install

# Configure as fontes
npx expo install @expo-google-fonts/montserrat @expo-google-fonts/inter

# Inicie o servidor de desenvolvimento
npx expo start
```

### Comandos Disponíveis

```bash
npm run start          # Inicia o Expo Metro Bundler
npm run android        # Abre no emulador Android
npm run ios           # Abre no simulador iOS
npm run web           # Abre no navegador
npm run lint          # Executa o linter
```

## 📱 Como Usar

### 1. **Feed Principal**

- Visualize todas as denúncias registradas
- Toque em qualquer card para ver detalhes
- Use o botão + (FAB) para nova denúncia

### 2. **Capturar Evidência**

- Permita acesso à câmera e localização
- Toque no círculo vermelho para capturar
- Adicione descrição da infração
- Toque em "PROTOCOLAR DENÚNCIA"

### 3. **Visualizar Detalhes**

- Veja foto, descrição e localização
- Mapa mostra coordenadas GPS exatas
- Botão de voltar no canto superior esquerdo

## 🔒 Permissões Necessárias

### iOS (`Info.plist`)

```xml
<key>NSCameraUsageDescription</key>
<string>Para capturar evidências das infrações</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>Para registrar localização das denúncias</string>
```

### Android (`app.json`)

```json
{
  "expo": {
    "android": {
      "permissions": ["CAMERA", "ACCESS_FINE_LOCATION"]
    }
  }
}
```

## 🏗️ Arquitetura

### Padrões Implementados

- **Functional Components** com React Hooks
- **TypeScript** para type safety
- **Context API** para estado global
- **Absolute Positioning** para overlays de câmera
- **useCallback** para otimização de performance

### Navegação

```typescript
Stack Navigator (Root)
├── Home (Tab Navigator)
│   ├── Mural da Vergonha (FeedScreen)
│   ├── Capturar Crime (CameraScreen)
│   └── Badge Context Provider
└── DenunciaDetails (Modal)
```

## 🐛 Troubleshooting

### Problemas Comuns

**Metro Bundler não inicia**

```bash
npx expo start -c  # Limpa o cache
```

**Erro de permissão de câmera**

- Verifique se as permissões estão configuradas
- Teste em dispositivo físico se simulador falhar

**CameraView tela preta**

- Reinicie o app completamente
- Verifique se expo-camera está instalado corretamente

**Maps não aparece no Android**

- Configure Google Maps API key no app.json
- Ative a Maps SDK for Android no Google Cloud Console



