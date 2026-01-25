import { Routes } from '@/routes/constants';
import type { RootStackParamList } from '@/routes/types';
import { LinkingOptions } from '@react-navigation/native';

const LINKING_CONFIG: LinkingOptions<RootStackParamList>['config'] = {
  screens: {
    [Routes.tabMainFlow]: {
      screens: {
        [Routes.pedidos]: {
          path: 'orders'
        }
      }
    },
    [Routes.placeProfile]: 'place/:placeId',
    [Routes.productsList]: 'products/:categoryId',
    Capture: 'capture'
  }
};

export const LINKING_OPTIONS: LinkingOptions<RootStackParamList> = {
  prefixes: ['x9-pocket://', 'https://x9-pocket.app.link'],
  config: LINKING_CONFIG
};
