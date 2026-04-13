import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import banner from './../banner.webp';
import experience from './../experience.webp'
import learning from './../learning.webp'
import skills from './../skills.webp'
import {Link} from 'react-router-dom';
import theme from './../theme';
import { ThemeProvider } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material/';
import Copyright from './../components/Copyright';
import Divider from '@mui/material/Divider';


const Home = () => {
    return (
      <ThemeProvider theme={theme}>
        <Paper className="Paper-Container">
            <CardMedia image={banner} loading='lazy' className="App-Banner" alt="Bannière du site : un paysage de forêt" sx={{opacity:1,minHeight:300}}>

            <Grid container>
              <Grid item md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    px: { xs: 3, md: 12 },
                    py: { xs: 3, md: 6 },
                    pr: { md: 0 },
                  }}
                >
                <Typography color="#384b42" component={"div"} variant={"h3"} gutterBottom sx={{textAlign:"left",fontWeight:"bold"}}>
                  Hello 👋
                </Typography>
                  <Typography component="div" variant={"h5"} color="#384b42" paragraph sx={{textAlign:"justify",fontWeight:"bold"}}>
                    Bienvenue sur ma page !
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            </CardMedia>
          </Paper>

          <Grid container spacing={1} sx={{p:5}} justifyContent="space-evenly" alignItems="center">

          <Grid item xs={12} md={3}>
            <Card className="Homecard" sx={{ maxWidth: 445, border: 1, borderColor:"secondary", borderRadius:"5%", boxShadow: 3, '&:hover': {
       boxShadow: "10"}}}>
              <CardActionArea id="experienceCard" component={Link} to="/experiences/" >
                <CardMedia
                  component="img"
                  height="300"
                  image={experience}
                  alt="Expériences - Une personne montre plusieurs fichiers"
                  loading="lazy"
                />
                <CardContent >
                  <Typography gutterBottom variant={"h5"} component="div">
                    Mes expériences
                  </Typography>
                  <Typography component="div" variant={"body2"} color="text.secondary">
                    Naviguer parmi mes différentes expériences de mon parcours professionnel.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Grid>

          <Grid item xs={12} md={3} >
          <Card className="Homecard" sx={{ maxWidth: 445, border: 1, borderColor:"secondary", borderRadius:"5%", boxShadow: 3, '&:hover': {
            boxShadow: "10"}}}>
              <CardActionArea component={Link} to="/competences/">
                <CardMedia
                  component="img"
                  height="300"
                  image={skills}
                  alt="Compétences - Une personne fait une présentation"
                  loading="lazy"
                />
                <CardContent>
                  <Typography component="div" gutterBottom variant={"h5"}>
                    Mes compétences
                  </Typography>
                  <Typography component="div" variant={"body2"} color="text.secondary">
                    Découvrir les différentes compétences que j'ai pu acquérir durant mon parcours.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Grid>

            <Grid item xs={12} md={3} >
            <Card className="Homecard" sx={{ maxWidth: 445, border: 1, borderColor:"secondary", borderRadius:"5%", boxShadow: 3, '&:hover': {
              boxShadow: "10"}}}>
                <CardActionArea component={Link} to="/formations/">
                  <CardMedia
                    component="img"
                    height="300"
                    image={learning}
                    alt="Formations - Une personne marche sur un escalier de livres"
                    loading="lazy"
                  />
                  <CardContent>
                    <Typography component="div" gutterBottom variant={"h5"}>
                      Mes formations
                    </Typography>
                    <Typography component="div" variant={"body2"} color="text.secondary">
                      Lire les différentes informations liées à mon cursus académique.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Grid>

          </Grid>

          <Paper className="Paper-Container" sx={{backgroundColor:"primary.main"}}>
          <Typography color="white" component={"h3"} variant={"h5"} gutterBottom sx={{textAlign:"center",py:2,fontWeight:'bold'}}>
            Quelques chiffres 🤓
          </Typography>
          <Grid container columns={10} spacing={2} sx={{p:2}} justifyContent="space-evenly" alignItems="center">
          <Grid item xs={6} md={2} sx={{ maxWidth: 445, borderRadius:"5%", boxShadow: 1, '&:hover': {
            boxShadow: "3"}}}>
          <Typography component="div" variant={"h5"} align="center" gutterBottom sx={{color:'#f8f8f8',fontWeight:'bold'}}>
          <Typography component="div" variant={"h5"} sx={{color:'secondary.main',fontWeight:'bold'}}>7 ans d'expérience
          </Typography> dans le product management.
          </Typography>
          </Grid>
            <Divider sx={{ display: { xs: 'none', md: 'block' },background:'white' }} orientation="vertical" flexItem/>
          <Grid item xs={6} md={2} sx={{ maxWidth: 445, borderRadius:"5%", boxShadow: 1, '&:hover': {
            boxShadow: "3"}}}>
            <Typography component="div" variant={"h5"} align="center" gutterBottom sx={{color:'#f8f8f8',fontWeight:'bold'}}>
            <Typography component="div" variant={"h5"} sx={{color:'secondary.main',fontWeight:'bold'}}>6 produits
            </Typography> gérés en B2B, B2C et B2B2C.
            </Typography>
          </Grid>
          <Divider sx={{ display: { xs: 'none', md: 'block' },background:'white' }} orientation="vertical" flexItem/>
          <Grid item xs={6} md={2} sx={{ maxWidth: 445, borderRadius:"5%", boxShadow: 1, '&:hover': {
            boxShadow: "3"}}}>
            <Typography component="div" variant={"h5"} align="center" gutterBottom sx={{color:'#f8f8f8',fontWeight:'bold'}}>
            <Typography component="div" variant={"h5"} sx={{color:'secondary.main',fontWeight:'bold'}}>10+ formations
            </Typography> en ligne suivies.
            </Typography>
          </Grid>
          <Divider  sx={{ display: { xs: 'none', md: 'block' },background:'white' }} orientation="vertical" flexItem/>
          <Grid item xs={6} md={2} sx={{ maxWidth: 445, borderRadius:"5%", boxShadow: 1, '&:hover': {
            boxShadow: "3"}}}>
            <Typography component="div" variant={"h5"} align="center" gutterBottom sx={{color:'#f8f8f8',fontWeight:'bold'}}>
            <Typography component="div" variant={"h5"} sx={{color:'secondary.main',fontWeight:'bold'}}>3 langues parlées
            </Typography> Français, Anglais, et Italien.
            </Typography>

          </Grid>

          </Grid>
          <Typography color="white" component={"h3"} variant={"h5"} gutterBottom sx={{textAlign:"center",py:2,fontWeight:'bold'}}>
            Trouvez plus d'informations dans les autres sections 🚀
          </Typography>
          </Paper>
          <Copyright/>
      </ThemeProvider>
    )
}

export default Home
