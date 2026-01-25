export const Routes = {
  MuralDaVergonha: 'Mural da Vergonha',
  CapturarCrime: 'Capturar Crime'
} as const;

export type RouteName = (typeof Routes)[keyof typeof Routes];
