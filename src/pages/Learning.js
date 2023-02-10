import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Copyright from './../components/Copyright';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material/';
import school from './../school.webp';
import courses from './../courses.webp';
import books from './../books.webp';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import tncy from './../tncy.webp';
import iaenancy from './../iaenancy.webp';
import polimi from './../polimi.webp';
import linkedin from './../linkedin.webp';
import mdp from './../mdp.webp';
import scrumleague from './../scrumleague.webp';
import udacity from './../udacity.webp';
import udemy from './../udemy.webp';
import cdh from './../cdh.webp';
import dd from './../dd.webp';
import hooked from './../hooked.webp';
import inspired from './../inspired.webp';
import p2p from './../p2p.webp';


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
            alt="Mon parcours académique"
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
          alt="Télécom Nancy"
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
          alt="IAE Nancy"
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
          alt="Politecnico di Milano"
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
            alt="Formations en ligne"
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
          sx={{width:'75%',pt:2}}
          image={linkedin}
          alt="LinkedIn"
          loading="lazy"
        />
        </div>
        </Grid>
        <Grid item md={9} container direction="column">
        <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold",pt:2}}>
          Advanced Product Marketing
        </Typography>
        <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
          LinkedIn (Août 2022)
        </Typography>
        </Grid>

        <Grid item md={3}>
        <div align='center'>
        <CardMedia
          component="img"
          sx={{width:'75%',pt:2}}
          image={udacity}
          alt="Udacity"
          loading="lazy"
        />
        </div>
        </Grid>
        <Grid item md={9} container direction="column">
        <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold",pt:2}}>
          Product Design
        </Typography>
        <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
          Udacity (Août 2022)
        </Typography>
        </Grid>

        <Grid item md={3}>
        <div align='center'>
        <CardMedia
          component="img"
          sx={{width:'75%',pt:2}}
          image={linkedin}
          alt="LinkedIn"
          loading="lazy"
        />
        </div>
        </Grid>
        <Grid item md={9} container direction="column">
        <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold",pt:2}}>
          Product Management: Building a product strategy
        </Typography>
        <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
          LinkedIn (Août 2022)
        </Typography>
        </Grid>

        <Grid item md={3}>
        <div align='center'>
        <CardMedia
          component="img"
          sx={{width:'75%',pt:2}}
          image={mdp}
          alt="Mind The product"
          loading="lazy"
        />
        </div>
        </Grid>
        <Grid item md={9} container direction="column">
        <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold",pt:2}}>
          Product-led Certification
        </Typography>
        <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
          Mind The Product (Août 2022)
        </Typography>
        </Grid>

        <Grid item md={3}>
        <div align='center'>
        <CardMedia
          component="img"
          sx={{width:'75%',pt:2}}
          image={udacity}
          alt="Udacity"
          loading="lazy"
        />
        </div>
        </Grid>
        <Grid item md={9} container direction="column">
        <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold",pt:2}}>
          Rapid prototyping (Août 2022)
        </Typography>
        <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
          Udacity
        </Typography>
        </Grid>

        <Grid item md={3}>
        <div align='center'>
        <CardMedia
          component="img"
          sx={{width:'75%',pt:2}}
          image={udemy}
          alt="Udemy"
          loading="lazy"
        />
        </div>
        </Grid>
        <Grid item md={9} container direction="column">
        <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold",pt:2}}>
          The Lean Startup
        </Typography>
        <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
          Udemy (Octobre 2021)
        </Typography>
        </Grid>

        <Grid item md={3}>
        <div align='center'>
        <CardMedia
          component="img"
          sx={{width:'75%',pt:2}}
          image={udemy}
          alt="Udemy"
          loading="lazy"
        />
        </div>
        </Grid>
        <Grid item md={9} container direction="column">
        <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold",pt:2}}>
          Advanced Product Management: Leadership & Communication
        </Typography>
        <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
          Udemy (Août 2021)
        </Typography>
        </Grid>

        <Grid item md={3} >
        <div align='center'>
        <CardMedia
          component="img"
          sx={{width:'75%',pt:2}}
          image={scrumleague}
          alt="Scrum league"
          loading="lazy"
        />
        </div>
        </Grid>
        <Grid item md={9} container direction="column">
        <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold",pt:2}}>
          International Certification Product Owner (icPO)
        </Typography>
        <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
          Scrum League (Mars 2021)
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
              alt="Livres"
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
            image={cdh}
            alt="Continuous Discovery Habits"
            loading="lazy"
          />
          </div>
          </Grid>
          <Grid item md={9} container direction="column">
          <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold"}}>
            Continuous Discovery Habits
          </Typography>
          <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
            Discover Products that Create Customer Value and Business Value <br/> De Teresa Torres
          </Typography>
          </Grid>

          <Grid item md={3}>
          <div align='center'>
          <CardMedia
            component="img"
            sx={{width:'75%'}}
            image={dd}
            alt="Discovery Discipline"
            loading="lazy"
          />
          </div>
          </Grid>
          <Grid item md={9} container direction="column">
          <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold"}}>
            Discovery Discipline
          </Typography>
          <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
          La méthode radicale pour exceller en Product Discovery <br/> De Tristan Charvillat et Rémi Guyot
          </Typography>
          </Grid>


          <Grid item md={3}>
          <div align='center'>
          <CardMedia
            component="img"
            sx={{width:'75%'}}
            image={hooked}
            alt="Hooked"
            loading="lazy"
          />
          </div>
          </Grid>
          <Grid item md={9} container direction="column">
          <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold"}}>
            Hooked
          </Typography>
          <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
            How to Build Habit-Forming Products <br/> De Nir Eyal
          </Typography>
          </Grid>

          <Grid item md={3}>
          <div align='center'>
          <CardMedia
            component="img"
            sx={{width:'75%'}}
            image={inspired}
            alt="Inspired"
            loading="lazy"
          />
          </div>
          </Grid>
          <Grid item md={9} container direction="column">
          <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold"}}>
            Inspired
          </Typography>
          <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
            How to create tech products customer love <br/> De Marty Cagan
          </Typography>
          </Grid>

          <Grid item md={3}>
          <div align='center'>
          <CardMedia
            component="img"
            sx={{width:'75%'}}
            image={p2p}
            alt="Project to Product"
            loading="lazy"
          />
          </div>
          </Grid>
          <Grid item md={9} container direction="column">
          <Typography color="black" gutterBottom sx={{textAlign:"left",fontWeight:"bold"}}>
            Project to Product
          </Typography>
          <Typography variant={"body"} color="text.secondary" sx={{textAlign:'left'}}>
            Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework <br/> De Mik Kersten
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
