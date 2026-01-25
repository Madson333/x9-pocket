export const Routes = {
  MuralDaVergonha: 'Mural da Vergonha',
  CapturarCrime: 'Capturar Crime',
  DenunciaDetails: 'DenunciaDetails'
} as const;

export type RouteName = (typeof Routes)[keyof typeof Routes];
