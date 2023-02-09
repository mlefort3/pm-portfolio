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
import Modal from '@mui/material/Modal';
import Grow from '@mui/material/Grow';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import tncy from './../tncy.png';
import iaenancy from './../iaenancy.png';
import polimi from './../polimi.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WorkIcon from '@mui/icons-material/Work';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Learning() {

  const [openUni, setOpenUni] = React.useState(false);
  const handleOpenUni = () => setOpenUni(true);
  const handleCloseUni = () => setOpenUni(false);

  const [openCourses, setOpenCourses] = React.useState(false);
  const handleOpenCourses = () => setOpenUni(true);
  const handleCloseCourses = () => setOpenUni(false);

  const [openBooks, setOpenBooks] = React.useState(false);
  const handleOpenBooks = () => setOpenUni(true);
  const handleCloseBooks = () => setOpenUni(false);

  const [expandedUni, setExpandedUni] = React.useState(false);
  const [expandedCourses, setExpandedCourses] = React.useState(false);
  const [expandedBooks, setExpandedBooks] = React.useState(false);

  const handleExpandClickUni = () => {
    setExpandedUni(!expandedUni);
  };

  const handleExpandClickCourses = () => {
    setExpandedCourses(!expandedCourses);
  };

  const handleExpandClickBooks = () => {
    setExpandedBooks(!expandedBooks);
  };

  return (
    <div>
    <Grid container justifyContent="center" sx={{mt:5}}>
    <Grid item md={10} xs={12} sx={{mx:{xs:5}}}>
    <Paper sx={{pt:5,borderRadius:4}}>

    <Typography color="#005151" component="h3" variant="h5" gutterBottom sx={{textAlign:"left",fontWeight:"bold",px:5}}>
      Parcours et formations
    </Typography>
    <Typography sx={{textAlign:'left', color: 'text.secondary',px:5,pb:2 }}>
      Découvrez ici le parcours qui m'a mené au poste de Product Manager et les ressources que j'utilise pour continuer de monter en compétences.
    </Typography>

    <Grid container spacing={2} sx={{px:5,pb:5}} justifyContent="space-evenly" alignItems="flex-start">

    <Grid item xs={12} md={4} container >
      <Card className="Homecard" sx={{border: 1, borderColor:"secondary", borderRadius:"5%", boxShadow: 3, '&:hover': {
 boxShadow: "10",display: 'flex', flexDirection: 'column',justifyContent: 'space-between'}}}>
        <CardActionArea component="Button" onClick={handleExpandClickUni}>
        <Grid item>
          <CardMedia
            component="img"
            image={school}
            sx={{width:'90%',pt:5,pb:2}}
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
              Découvrir le cursus académique que j'ai effectué avant de commencer ma carrière.
            </Typography>
          </CardContent>
          </Grid>


          <CardActions disableSpacing>

        <ExpandMore
          expand={expandedUni}
          onClick={handleExpandClickUni}
          aria-expanded={expandedUni}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Typography sx={{mr:2}}>
        {!expandedUni ? "Découvrir" : "Réduire"}
        </Typography>
      </CardActions>
      <Collapse in={expandedUni} timeout="auto" unmountOnExit>
        <CardContent>
        <Grid item container direction='row' spacing={1} alignItems='center'>
        <Grid item md={3}>
        <div align='center'>
        <CardMedia
          component="img"
          sx={{width:'75%'}}
          image={tncy}
          alt="green iguana"
          loading="lazy"
        />
        </div>
        </Grid>
        <Grid item md={9} container direction="column">
        <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold"}}>
          TELECOM Nancy (2016-2019)
        </Typography>
        <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
          École d'ingénieurs en informatique et sciences du numérique. <br/>
          Approfondissement Internet, Systèmes connectés et Sécurité (ISS).
        </Typography>
        </Grid>

        <Grid item md={3}>
        <div align='center'>
        <CardMedia
          component="img"
          sx={{width:'75%'}}
          image={iaenancy}
          alt="green iguana"
          loading="lazy"
        />
        </div>
        </Grid>
        <Grid item md={9} container direction="column">
        <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold",pt:2}}>
          IAE Nancy (2018-2019)
        </Typography>
        <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
          Master 2 Administration des Entreprises (MAE). <br/>
          En double-diplôme avec TELECOM Nancy.
        </Typography>
        </Grid>


        <Grid item md={3}>
        <div align='center'>
        <CardMedia
          component="img"
          sx={{width:'75%'}}
          image={polimi}
          alt="green iguana"
          loading="lazy"
        />
        </div>
        </Grid>
        <Grid item md={9} container direction="column">
        <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold",pt:2}}>
          Politecnico di Milano (2018)
        </Typography>
        <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
          Master of Telecommunications Engineering. <br/>
          Semestre réalisé en Erasmus.
        </Typography>
        </Grid>

        </Grid>
        </CardContent>
      </Collapse>
        </CardActionArea>
      </Card>
      </Grid>

    <Grid item xs={12} md={4} >
    <Card className="Homecard" sx={{ border: 1, borderColor:"secondary", borderRadius:"5%", boxShadow: 3, '&:hover': {
      boxShadow: "10",display: 'flex', flexDirection: 'column',justifyContent: 'space-between'}}}>
        <CardActionArea component="Button" onClick={handleExpandClickCourses}>
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

          <CardActions disableSpacing>

        <ExpandMore
          expand={expandedCourses}
          onClick={handleExpandClickCourses}
          aria-expanded={expandedCourses}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Typography sx={{mr:2}}>
        {!expandedCourses ? "Découvrir" : "Réduire"}
        </Typography>
      </CardActions>
      <Collapse in={expandedCourses} timeout="auto" unmountOnExit>
        <CardContent>
        <Grid item container direction='row' spacing={1} alignItems='center'>
        <Grid item md={3}>
        <div align='center'>
        <CardMedia
          component="img"
          sx={{width:'75%'}}
          image={tncy}
          alt="green iguana"
          loading="lazy"
        />
        </div>
        </Grid>
        <Grid item md={9} container direction="column">
        <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold"}}>
          Nom
        </Typography>
        <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
          Texte
        </Typography>
        </Grid>

        </Grid>
        </CardContent>
      </Collapse>

        </CardActionArea>
      </Card>
      </Grid>

      <Grid item xs={12} md={4} >
      <Card className="Homecard" sx={{ border: 1, borderColor:"secondary", borderRadius:"5%", boxShadow: 3, '&:hover': {
        boxShadow: "10",display: 'flex', flexDirection: 'column',justifyContent: 'space-between'}}}>
          <CardActionArea component="Button" onClick={handleExpandClickBooks}>
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
            <CardActions disableSpacing>

          <ExpandMore
            expand={expandedBooks}
            onClick={handleExpandClickBooks}
            aria-expanded={expandedBooks}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <Typography sx={{mr:2}}>
          {!expandedBooks ? "Découvrir" : "Réduire"}
          </Typography>
        </CardActions>
        <Collapse in={expandedBooks} timeout="auto" unmountOnExit>
          <CardContent>
          <Grid item container direction='row' spacing={1} alignItems='center'>
          <Grid item md={3}>
          <div align='center'>
          <CardMedia
            component="img"
            sx={{width:'75%'}}
            image={tncy}
            alt="green iguana"
            loading="lazy"
          />
          </div>
          </Grid>
          <Grid item md={9} container direction="column">
          <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold"}}>
            Nom
          </Typography>
          <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
            Texte
          </Typography>
          </Grid>

          </Grid>
          </CardContent>
        </Collapse>

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
