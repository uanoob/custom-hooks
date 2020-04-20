import { useState, useMemo } from 'react';

export const useHover = initialState => {
  const [isHovered, setIsHovered] = useState((initialState = false));
  const bind = useMemo(() => {
    return {
      onMouseOver: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    };
  }, []);
  return [isHovered, bind];
};
