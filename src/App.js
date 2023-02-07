import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import WorkInProgress from './pages/WorkInProgress';
import Experiences from './pages/Experiences';
import NotFound from './pages/NotFound';
import theme from './theme';
import "animate.css/animate.min.css";

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <ResponsiveAppBar/>
    <Container disableGutters className="App">
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/competences" element={<WorkInProgress/>}/>
      <Route exact path="/experiences" element={<WorkInProgress/>}/>
      <Route exact path="/experienceswip" element={<Experiences/>}/>
      <Route exact path="/formations" element={<WorkInProgress/>}/>
      <Route exact path="/apropos" element={<About/>}/>
      <Route exact path="/*" element={<NotFound/>}/>
    </Routes>
    </Container>
    </ThemeProvider>
    </BrowserRouter>
  );
} export default App;
