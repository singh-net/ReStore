import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { Container } from '@mui/system';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../features/about/About';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import Contact from '../../features/contact/Contact';
import Homepage from '../../features/home/Homepage';
import Header from './Header';

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const darkTheme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: darkMode ? '#121212' : '#eaeaea',
      },
    },
  });

  function handleThemeChange() {
    setdarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:id' element={<ProductDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
