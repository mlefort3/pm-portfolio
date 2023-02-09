import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props} sx={{my:2}}>
      {'Fait avec ❤️ par mes soins'}
      <Link color="inherit" href="/">
      </Link>{' en '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
