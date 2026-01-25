import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const feedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5' // Cinza "escritório de contabilidade"
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
    fontSize: 24,
    fontWeight: '900',
    color: '#E63946',
    textTransform: 'uppercase',
    letterSpacing: 2
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
  // image wrapper and placeholder
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

export const cameraStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  topControls: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10
  },
  closeButton: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20
  },
  closeText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  controlsContainer: {
    width: width,
    height: 150,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20
  },
  captureBtnOuter: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  captureBtnInner: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#E63946'
  },
  inputOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  previewImage: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#FFF'
  },
  textInput: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
    elevation: 5
  },
  sendButton: {
    width: '100%',
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  // camera specific additions
  preview: {
    flex: 1,
    width: '100%',
    backgroundColor: '#111'
  },
  sideSpacer: {
    width: 80
  }
});
