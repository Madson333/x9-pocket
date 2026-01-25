import React, { createContext, useCallback, useContext, useState } from 'react';

type BadgeContextType = {
  badgeCount: number;
  increment: () => void;
  reset: () => void;
  setCount: (n: number) => void;
};

const BadgeContext = createContext<BadgeContextType | undefined>(undefined);

export const useBadge = (): BadgeContextType => {
  const ctx = useContext(BadgeContext);
  if (!ctx) throw new Error('useBadge must be used within BadgeProvider');
  return ctx;
};

export const BadgeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [badgeCount, setBadgeCount] = useState(0);

  const increment = useCallback(() => setBadgeCount((c) => c + 1), []);
  const reset = useCallback(() => setBadgeCount(0), []);
  const setCount = useCallback((n: number) => setBadgeCount(n), []);

  return (
    <BadgeContext.Provider value={{ badgeCount, increment, reset, setCount }}>
      {children}
    </BadgeContext.Provider>
  );
};
