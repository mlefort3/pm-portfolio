import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import wip from "./../WIP.png"
import Copyright from './../components/Copyright';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {Link} from 'react-router-dom';
import { CardActionArea } from '@mui/material/';
import school from './../school.png';
import courses from './../courses.png';
import books from './../books.png';

export default function Learning() {

  return (
    <div>
    <Grid container justifyContent="center" sx={{mt:5}}>
    <Grid item md={9} xs={12} sx={{mx:{xs:5}}}>
    <Paper sx={{pt:5,borderRadius:4}}>

    <Typography color="#005151" component="h3" variant="h5" gutterBottom sx={{textAlign:"left",fontWeight:"bold",px:5}}>
      Parcours et formations
    </Typography>
    <Typography sx={{textAlign:'left', color: 'text.secondary',px:5,pb:2 }}>
      Découvrez icile parcours qui m'a mené au poste de Product Manager et les ressources que j'utilise pour continuer de monter en compétences.
    </Typography>

    <Grid container spacing={2} sx={{px:5,pb:5}} justifyContent="space-evenly" alignItems="center">

    <Grid item xs={12} md={4} container >
      <Card className="Homecard" sx={{height:300, border: 1, borderColor:"secondary", borderRadius:"5%", boxShadow: 3, '&:hover': {
 boxShadow: "10",display: 'flex', flexDirection: 'column',justifyContent: 'space-between'}}}>
        <CardActionArea component={Link} to="/experiences/">
        <Grid item>
          <CardMedia
            component="img"
            image={school}
            sx={{width:'100%',pt:5,pb:2}}
            alt="green iguana"
            loading="lazy"
          />
          </Grid>
          <Grid >
          <CardContent>
            <Typography gutterBottom variant={"h5"} component="div">
              Mon parcours académique
            </Typography>
            <Typography component="div" variant={"body2"} color="text.secondary">
              Découvrir mon parcours et ma formation.
            </Typography>
          </CardContent>
          </Grid>
        </CardActionArea>
      </Card>
      </Grid>

    <Grid item xs={12} md={4} >
    <Card className="Homecard" sx={{ height:300, border: 1, borderColor:"secondary", borderRadius:"5%", boxShadow: 3, '&:hover': {
      boxShadow: "10",display: 'flex', flexDirection: 'column',justifyContent: 'space-between'}}}>
        <CardActionArea component={Link} to="/competences/">
        <div align='center'>
          <CardMedia
            component="img"
            sx={{width:'75%',pt:2}}
            image={courses}
            alt="green iguana"
            loading="lazy"
          />
          </div>
          <CardContent>
            <Typography component="div" gutterBottom variant={"h5"}>
              Mes formations
            </Typography>
            <Typography component="div" variant={"body2"} color="text.secondary">
              Découvrir les différentes formations et conférences que j'ai suivies.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>

      <Grid item xs={12} md={4} >
      <Card className="Homecard" sx={{ height:300, border: 1, borderColor:"secondary", borderRadius:"5%", boxShadow: 3, '&:hover': {
        boxShadow: "10",display: 'flex', flexDirection: 'column',justifyContent: 'space-between'}}}>
          <CardActionArea component={Link} to="/formations/">
          <div align='center'>
            <CardMedia
              component="img"
              image={books}
              sx={{width:'75%',pt:4}}
              alt="green iguana"
              loading="lazy"
            />
            </div>
            <CardContent>
              <Typography component="div" gutterBottom variant={"h5"}>
                Mes lectures
              </Typography>
              <Typography component="div" variant={"body2"} color="text.secondary">
                Voir mes différentes recommandations de livres autour du Product Management.
              </Typography>
            </CardContent>
          </CardActionArea>
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
