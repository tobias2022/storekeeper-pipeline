import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from 'theme/Theme';
import { RootState } from 'store';

export interface SettingsState {
  theme: Theme;
}

const initialState: SettingsState = {
  theme: Theme.light,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = settingsSlice.actions;

export const selectTheme = (state: RootState): Theme => state.settings.theme;
export default settingsSlice.reducer;
