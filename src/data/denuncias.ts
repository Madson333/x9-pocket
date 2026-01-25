export type Denuncia = {
  id: string;
  crime: string;
  local: string;
  img: string;
  timestamp?: string;
  latitude?: number;
  longitude?: number;
};

export const DENUNCIAS: Denuncia[] = [
  {
    id: '1',
    crime: 'Roubou caneta',
    local: 'Mesa 4',
    img: 'https://placekitten.com/600/400',
    timestamp: '08:12',
    latitude: -23.5505,
    longitude: -46.6333
  },
  {
    id: '2',
    crime: 'Peixe no microondas',
    local: 'Copa',
    img: 'https://placekitten.com/601/400',
    timestamp: '09:42',
    latitude: -23.551,
    longitude: -46.634
  },
  {
    id: '3',
    crime: 'Parou no corredor',
    local: 'Corredor',
    img: 'https://placekitten.com/602/400',
    timestamp: '10:15',
    latitude: -23.5495,
    longitude: -46.632
  },
  {
    id: '4',
    crime: 'Falou alto demais',
    local: 'Sala 2',
    img: 'https://placekitten.com/603/400',
    timestamp: '11:01',
    latitude: -23.552,
    longitude: -46.635
  },
  {
    id: '5',
    crime: 'Deixou prato sujo',
    local: 'Copa',
    img: 'https://placekitten.com/604/400',
    timestamp: '12:34',
    latitude: -23.549,
    longitude: -46.631
  }
];

export function addDenuncia(d: Denuncia) {
  // In-memory push for mock; non-persistent
  (DENUNCIAS as unknown as Denuncia[]).unshift(d);
}
