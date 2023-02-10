import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import notFound from "./../404.webp"
import Grid from "@mui/material/Grid";
import Copyright from './../components/Copyright';

export default function NotFound() {

  return (
    <div>
    <Grid container justifyContent="center" sx={{mt:5}}>
    <Grid item md={9} xs={12} sx={{mx:{xs:5}}}>
    <Paper sx={{pt:10}}>
      <img src={notFound} height={300} loading='lazy' alt="Page non trouvée"/>
      <Typography color="secondary.main" component="h3" variant="h4" gutterBottom sx={{textAlign:"center",fontWeight:"bold",pb:10,pt:2}}>
        Oups ... nous ne trouvons pas cette page 😢
      </Typography>
    </Paper>
    <Copyright/>
    </Grid>
    </Grid>
    </div>
  );
}
