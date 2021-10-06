export enum Theme {
  light = 'light',
  dark = 'dark',
}

export interface ThemeProperty {
  id: Theme;
  label: string;
}

export const THEMES: ThemeProperty[] = [
  { id: Theme.light, label: 'Light' },
  { id: Theme.dark, label: 'Dark' },
];

interface ThemePalette {
  primaryColor: string;
  secondaryColor: string;
  font: string;
}

export const THEME_COLOR: { [key in Theme]: ThemePalette } = {
  [Theme.light]: {
    primaryColor: '#CDF5F5',
    secondaryColor: '#CC5216',
    font: '#000',
  },
  [Theme.dark]: {
    primaryColor: '#145DA0',
    secondaryColor: '#2E8BC0',
    font: '#fff',
  },
};
