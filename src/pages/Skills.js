import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import computerorder from "./../Host+member.png";
import peopledoc from "./../peopledoc.png";
import peopledocukg from './../peopledocukg.png'
import logolrqdo from './../logoLRQDO.png';
import security from './../security.png';
import bnpparibas from './../BNP-Paribas-logo.png';
import looker from './../looker.png';
import pendo from './../pendo.png';
import redash from './../redash.png';
import Copyright from './../components/Copyright';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WorkIcon from '@mui/icons-material/Work';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import "animate.css/animate.min.css";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Experiences() {

  return (
    <div>
    <Grid container justifyContent="center" spacing="3">
    <Grid item md={9} xs={12} sx={{mx:{xs:5}}}>



    <Paper sx={{py:3,px:6,mt:6,borderRadius:4}} >

    <Typography color="primary.main" component="h3" variant="h5" gutterBottom sx={{textAlign:"left",fontWeight:"bold"}}>
      Analyse de données utilisateurs
    </Typography>
    <Grid container direction='row' justifyContent='space-around' spacing={2}>
    <Grid item>
    <Card sx={{ width: 300, height:350,borderRadius:4 }}>
      <CardMedia
        component="img"
        width='100%'
        sx={{p:5}}
        image={looker}
        title="green iguana"
      />
      <CardContent>
        <Typography align="left" variant="body2" color="text.secondary">
          Looker est un outil d'analyse et de visualisation de données. Il permet la création de dashboards personnalisés de manière simple sur la base de données.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Exemples d'utilisation</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item>
    <Card sx={{ width: 300, height:350,borderRadius:4 }}>
      <CardMedia
        component="img"
        width='100%'
        sx={{p:5}}
        image={pendo}
        title="green iguana"
      />
      <CardContent>
        <Typography align="left" variant="body2" color="text.secondary">
          Pendo est une plateforme d'expérience produit qui permet l'analyse de l'utilisation de la plateforme par les utilisateurs ainsi que le paramétrage de guides et de sondages personnalisés.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Exemples d'utilisation</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item>
    <Card sx={{ width: 300, height:350, borderRadius:4 }}>
      <CardMedia
        component="img"
        sx={{p:5,width:'75%'}}
        image={redash}
        title="green iguana"
      />
      <CardContent>
        <Typography align="left" variant="body2" color="text.secondary">
        Redash est un outil d'analyse et de visualisation de données. Il permet notamment la création de dashboards personnalisés à partir de requêtes réalisées sur la base de données.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Exemples d'utilisation</Button>
      </CardActions>
    </Card>
    </Grid>


    </Grid>
    </Paper>
    <Copyright/>
    </Grid>
    </Grid>
    </div>
  );
}
