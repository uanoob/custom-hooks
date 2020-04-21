import React, { createContext } from 'react';
import { useToggle } from '../hooks/useToggle';

export const AppContext = createContext({
  isMenuOpen: false,
});

export const Provider = ({ children }) => {
  const { isToggled, toggle } = useToggle(false);
  return (
    <AppContext.Provider value={{ isMenuOpen: isToggled, toggleMenu: toggle }}>
      {children}
    </AppContext.Provider>
  );
};
