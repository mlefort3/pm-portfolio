import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import wip from "./../WIP.png"
import Copyright from './../components/Copyright';

export default function WorkInProgress() {

  return (
    <div>
    <Grid container justifyContent="center" sx={{mt:5}}>
    <Grid item md={9} xs={12} sx={{mx:{xs:5}}}>
    <Paper sx={{pt:10}}>
      <img src={wip} loading='lazy' height={200} alt="Travail en cours"/>
      <Typography color="secondary.main" component="h3" variant="h4" gutterBottom sx={{textAlign:"center",fontWeight:"bold",pb:10,pt:2}}>
        Page en cours de développement 🚧
      </Typography>
    </Paper>
    <Copyright/>
    </Grid>
    </Grid>
    </div>
  );
}
