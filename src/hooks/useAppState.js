import { useContext } from 'react';
import { AppContext } from '../state';

export const useAppState = () => useContext(AppContext);
