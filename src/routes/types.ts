import { NavigatorScreenParams } from '@react-navigation/native';

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Orders: undefined;
  Menu: undefined;
};

export type RootStackParamList = {
  tabMainFlow: NavigatorScreenParams<TabParamList> | undefined;
  placeProfile: { placeId: string } | undefined;
  productsList: { categoryId: string } | undefined;
  Capture: undefined;
};