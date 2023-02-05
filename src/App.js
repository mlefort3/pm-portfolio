import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import WorkInProgress from './pages/WorkInProgress';
import NotFound from './pages/NotFound';
import './App.css';

import theme from './theme';

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <ResponsiveAppBar/>
    <Container disableGutters className="App">
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/sinformer" element={<WorkInProgress/>}/>
      <Route exact path="/sengager" element={<WorkInProgress/>}/>
      <Route exact path="/apropos" element={<About/>}/>
      <Route exact path="/*" element={<NotFound/>}/>
    </Routes>
    </Container>
    </ThemeProvider>
    </BrowserRouter>
  );
} export default App;
