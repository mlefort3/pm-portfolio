import { createTheme } from '@mui/material/styles';
import { frFR } from '@mui/material/locale';

export default createTheme({
  palette: {
    mode: 'light',
    primary: {
      // keep the same green/teal family but slightly more modern and saturated
      main: '#2f5b4f',
      light: '#6ea89a',
      dark: '#243f3a',
    },
    secondary: {
      // similar muted sage
      main: '#8fa99b',
      light: '#b7c9bd',
      dark: '#5f786b',
    },
    background: {
      default: '#f5f7f6',
      paper: '#ffffff'
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
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Inter',
      'Helvetica Neue',
      'Arial',
      'sans-serif'
    ].join(','),
    h3: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    body1: { lineHeight: 1.6 }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none'
        }
      }
    }
  }
},frFR,);
