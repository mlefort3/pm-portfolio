import { createTheme } from '@mui/material/styles';
import { frFR } from '@mui/material/locale';

export default createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#384b42',
      light: '#EC626E',
      dark: '#C81927',
    },
    secondary: {
      main: '#9bb0a5',
      light: '#325C97',
      dark: '#172A45',
    },
    background: {
      default: '#fafafa',
    },
    error: {
      main: '#e76f51',
      dark: '#d7421d',
      light: '#ec8d75',
    },
    warning: {
      main: '#f4a261',
      dark: '#ef7c1d',
      light: '#f6b783',
    },
    info: {
      main: '#264653',
      dark: '#1c333c',
      light: '#4987a0',
    },
  },
},frFR,);
