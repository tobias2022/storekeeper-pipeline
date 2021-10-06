import { ThemeProvider, unstable_createMuiStrictModeTheme as createTheme } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from '@emotion/react';

import { useAppSelector } from 'hooks/redux';
import { selectTheme } from 'store/settings/settingsSlice';
import { THEME_COLOR } from './Theme';

const MyThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const theme = useAppSelector(selectTheme);
  const themeColor = THEME_COLOR[theme];
  // https://material-ui.com/customization/default-theme/#default-theme
  const muiTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: themeColor.primaryColor,
        contrastText: themeColor.font,
      },
      secondary: {
        main: themeColor.secondaryColor,
        contrastText: themeColor.font,
      },
      text: {
        primary: themeColor.font,
        secondary: themeColor.font,
      },
    },
  });
  return (
    <ThemeProvider theme={muiTheme}>
      <StyledThemeProvider theme={muiTheme}>{children}</StyledThemeProvider>
    </ThemeProvider>
  );
};

export default MyThemeProvider;
