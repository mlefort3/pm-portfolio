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

export default function Experiences() {

  return (
    <div>
    <Grid container justifyContent="center" spacing="3">
    <Grid item md={9} xs={12} sx={{mx:{xs:5}}}>
    <Paper sx={{pt:6,px:6,mt:6,borderRadius:4}}>
      <Grid item md={12} container direction="row" spacing={6}>
        <Grid item  md={4} sx={{justifyContent: 'center', alignItems:'center', width: '100%'}}>
          <img src={computerorder} width='100%' alt="Travail en cours" loading="lazy"/>
          <img src={logolrqdo} width='100%' alt="Travail en cours" loading="lazy"/>
        </Grid>
        <Grid item md={8}>
        <Typography color="#005151" component="h3" variant="h5" gutterBottom sx={{textAlign:"left",fontWeight:"bold",pt:2}}>
          Product Manager - La Ruche Qui Dit Oui !
        </Typography>
        <List>
              <ListItem>
                <ListItemIcon>
                  <DateRangeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Expérience de 3 mois"
                  secondary='Début Novembre 2022 - Début Février 2023 (Licenciement économique)'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Product Manager sur les produits B2B"
                  secondary='Interfaces producteurs et responsables de ruches'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RocketLaunchIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Déploiement de fonctionnalités impactantes en B2B"
                  secondary="Nouveau catalogue produits pour les producteurs, planification de messages et création d'une nouvelle vente à partir des 4 dernières pour les responsables de ruches."/>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RocketLaunchIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Conduite d'un sujet de discovery avec le Product Design"
                  secondary="Amélioration des tableaux de bords de statistiques affichés aux responsables de ruches : entretiens utilisateurs à l'international, atelier de co-conception UX, story-mapping."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RocketLaunchIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Analyse des données utilisateurs"
                  secondary="Création de dashboard, suivis de KPIs de 2023 et mesure d'adoption des dernières fonctionnalités via des requêtes SQL."
                />
              </ListItem>
          </List>
        </Grid>
      </Grid>
    </Paper>
    </Grid>


    <Grid item md={9} xs={12} sx={{mx:{xs:5}}}>
    <AnimationOnScroll animateIn="animate__bounceIn" >

    <Paper sx={{pt:6,px:6,mt:6,borderRadius:4}} >
    <Grid item md={12} container direction="row" spacing={6}>

    <Grid item md={8}>
    <Typography color="#005151" component="h3" variant="h5" gutterBottom sx={{textAlign:"left",fontWeight:"bold",pt:2}}>
      Senior Product Manager - PeopleDoc/UKG
    </Typography>
    <List>
          <ListItem>
            <ListItemIcon>
              <DateRangeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Expérience de 2 ans et demi"
              secondary='Début Janvier 2020 - Fin Octobre 2022'
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText
              primary="Senior Product Manager sur la ligne HRSD People Assist"
              secondary='Gestion des produits Base de Connaissances et Portail Salarié'
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RocketLaunchIcon />
            </ListItemIcon>
            <ListItemText
              primary="Création d'une nouvelle application 'from scratch'"
              secondary="Nouvelle Base de Connaissances RH avec gestion internationalisée des articles et catégories. Déploiement et migration auprès de l'ensemble des clients."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RocketLaunchIcon />
            </ListItemIcon>
            <ListItemText
              primary="Refonte d'un produit existant"
              secondary="Recherche et déploiement d'une nouvelle page d'accueil pour le portail salarié de la suite UKG HRSD People Assist. Ce portail regroupe des articles à destination des employés, mais aussi potentiellement des tâches à réaliser et la possibilité de réaliser des demandes auprès des équipes RH."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RocketLaunchIcon />
            </ListItemIcon>
            <ListItemText
              primary="Gestion complète du cycle de vie produit"
              secondary="Analyse des retours utilisateurs, ateliers de priorisation RICE avec les équipes opérationnelles, recherche et spécifications des solutions avec l'équipe de développement et le design, tests fonctionnels, communication des nouveautés produits et analyse des données utilisateurs."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RocketLaunchIcon />
            </ListItemIcon>
            <ListItemText
              primary="Analyse de données utilisateurs"
              secondary="Création de guides d'analyses, de dashboards et de requêtes sur Pendo et Looker. Formations en interne sur l'utilisation du logiciel Pendo."
            />
          </ListItem>
      </List>
    </Grid>

    <Grid item md={4} direction="column"
  justifyContent="center"
  alignItems="center" sx={{justifyContent: 'center', alignItems:'center', width: '100%'}}>
      <img src={peopledoc} width='100%' alt="Travail en cours" loading="lazy"/>
      <img src={peopledocukg} width='100%' alt="Travail en cours" loading="lazy"/>
    </Grid>
    </Grid>
    </Paper>

    </AnimationOnScroll>
    </Grid>


    <Grid item md={9} xs={12} sx={{mx:{xs:5}}}>
    <AnimationOnScroll animateIn="animate__bounceIn">
    <Paper sx={{pt:6,px:6,mt:6,borderRadius:4}}>
      <Grid item md={12} container direction="row" spacing={6}>
        <Grid item  md={4} sx={{justifyContent: 'center', alignItems:'center', width: '100%'}}>
          <img src={security} width='100%' alt="Travail en cours" loading="lazy"/>
          <img src={bnpparibas} width='100%' alt="Travail en cours" loading="lazy"/>
        </Grid>
        <Grid item md={8}>
        <Typography color="#005151" component="h3" variant="h5" gutterBottom sx={{textAlign:"left",fontWeight:"bold",pt:2}}>
          Product Owner - BNP Paribas
        </Typography>
        <List>
              <ListItem>
                <ListItemIcon>
                  <DateRangeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Expérience de 6 mois"
                  secondary="Début Avril 2019 - Fin Septembre 2019 (Stage de fin d'études)"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Product Owner dans la digital factory 'Security' d'ITG"
                  secondary="Gestion d'une plateforme de mise à disposition automatique de WAF en interne"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RocketLaunchIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Promotion de la méthode Agile Scrum"
                  secondary="Accompagnement d'une équipe de développement pour son utilisation de la méthode Scrum, préparation et animation des rituels."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RocketLaunchIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Gestion de la roadmap et du backlog produit"
                  secondary="Analyse des retours utilisateurs, gestion de la roadmap et préparation des spécifications sur la plateforme de mise à disposition automatique de WAF (Web Application Firewall)"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RocketLaunchIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Communication autour du produit et de ses nouveautés"
                  secondary='Présentations du fonctionnement produit, des nouveautés déployées et de la roadmap à venir lors de différents évènements auprès des différentes entités du groupe.'
                />
              </ListItem>
          </List>
        </Grid>
      </Grid>
    </Paper>
    </AnimationOnScroll>
    </Grid>

    <Grid item md={9} xs={12} sx={{mx:{xs:5}}}>
    <Copyright/>
    </Grid>
    </Grid>
    </div>
  );
}
