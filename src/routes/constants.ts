export const Routes = {
  tabMainFlow: 'TabMainFlow',
  home: 'Home',
  search: 'Search',
  pedidos: 'Orders',
  menu: 'Menu',
  placeProfile: 'PlaceProfile',
  productsList: 'ProductsList',
  capture: 'Capture'
} as const;

export type RouteKey = (typeof Routes)[keyof typeof Routes];
