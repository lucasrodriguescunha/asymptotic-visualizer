import { createContext } from 'react';
import type { ThemeProviderState } from '../types/ThemeProviderState';

export const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);