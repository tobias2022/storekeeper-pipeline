import React from 'react';
import { AppBar, Typography, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { selectTheme, setTheme } from 'store/settings/settingsSlice';
import { Theme, THEMES, ThemeProperty } from 'theme/Theme';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import styled from '@emotion/styled';

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function NavBar() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  return (
    <AppBar position="static">
      <Row>
        <Typography variant="h6">Storekeeper</Typography>
        <FormControl>
          <InputLabel id="theme-select-label">Theme</InputLabel>
          <Select
            labelId="theme-select-label"
            id="theme-select"
            value={theme}
            onChange={(e) => dispatch(setTheme(e.target.value as Theme))}
          >
            {THEMES.map((property: ThemeProperty) => (
              <MenuItem value={property.id} key={property.id}>
                {property.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Row>
    </AppBar>
  );
}
