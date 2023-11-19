import React, { useState, useEffect } from 'react';
import Navbar from './assets/Components/Navbar';
import Albums from './assets/Components/Albums';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {

  const [albums, setAlbums] =useState([]);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <>
        <Navbar />
        <Albums albums={albums} setAlbums={setAlbums} />
      </>
    </ThemeProvider>
  );
}




