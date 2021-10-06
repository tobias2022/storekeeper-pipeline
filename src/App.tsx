import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SideBar from 'components/ui/SideBar';
import Router from './Router';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Router />
      </Box>
    </Box>
  );
}

export default App;
