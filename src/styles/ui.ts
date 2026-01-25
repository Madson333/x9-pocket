import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const feedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5'
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#1D3557',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 10
  },
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontFamily: 'Montserrat_700Bold',
    color: '#E63946',
    textTransform: 'uppercase'
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover'
  },
  cardContent: {
    padding: 15
  },
  crimeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 10
  },
  cardImageWrapper: {
    position: 'relative'
  },
  imagePlaceholder: {
    backgroundColor: '#ddd',
    height: 250,
    width: '100%'
  },
  timestamp: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5
  },
  timestampText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold'
  },
  spacerTop: { height: 20 },
  spacerSmall: { height: 12 },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    backgroundColor: '#E63946',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#E63946',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    zIndex: 999
  },
  fabText: {
    fontSize: 30,
    color: '#FFF',
    marginTop: -2
  }
});

const COLORS = {
  danger: '#E63946',
  dark: '#1D3557',
  light: '#F1FAEE',
  glass: 'rgba(29, 53, 87, 0.8)',
  success: '#2A9D8F'
};

export const cameraStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  camera: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between'
  },
  topControls: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10
  },
  closeButton: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeText: {
    color: COLORS.light,
    fontSize: 20,
    fontWeight: 'bold'
  },
  controlsContainer: {
    height: 150,
    backgroundColor: 'rgba(0,0,0,0.9)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },
  captureBtnOuter: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: COLORS.light,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  captureBtnInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.danger,
    shadowColor: COLORS.danger,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5
  },
  inputOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    zIndex: 20
  },
  previewImage: {
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: COLORS.light,
    marginBottom: 20,
    transform: [{ rotate: '-1deg' }]
  },
  textInput: {
    width: '100%',
    backgroundColor: COLORS.light,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: COLORS.dark,
    marginBottom: 16,
    elevation: 2
  },
  sendButton: {
    width: '100%',
    backgroundColor: COLORS.danger,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5
  },
  sendButtonText: {
    color: COLORS.light,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1.5,
    textTransform: 'uppercase'
  },
  retryButton: {
    marginTop: 20,
    padding: 10
  },
  retryText: {
    color: '#AAA',
    textDecorationLine: 'underline'
  }
});
