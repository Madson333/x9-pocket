import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: object) {
  if (navigationRef.isReady()) {
    // use `any` casts to avoid strict signature mismatch for programmatic navigation
    navigationRef.navigate(name as any, params as any);
  }
}
