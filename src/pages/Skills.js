import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import looker from './../looker.webp';
import pendo from './../pendo.webp';
import redash from './../redash.webp';
import ga from './../GoogleAnalytics.webp';
import hotjar from './../hotjar.webp';
import sql from './../sql.webp';
import figma from './../figma.webp';
import miro from './../miro.webp';
import sondage from './../sondage.webp';
import cadrage from './../cadrage.webp';
import entretien from './../entretien.webp';
import aha from './../aha.webp';
import asana from './../asana.webp';
import jira from './../jira.webp';
import postman from './../postman.webp';
import specs from './../specs.webp';
import test from './../test.webp';
import confluence from './../confluence.webp';
import notion from './../notion.webp';
import slack from './../slack.webp';
import Copyright from './../components/Copyright';
import "animate.css/animate.min.css";
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

export default function Experiences() {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
    <Grid container justifyContent="center">
    <Grid item md={9} xs={12} sx={{mx:{md:5}}}>

    <Paper sx={{py:3,px:{xs:2,md:6},mt:6,borderRadius:4}} >

    <Typography color="#005151" component="h3" variant="h5" gutterBottom sx={{textAlign:"left",fontWeight:"bold"}}>
      Compétences et outils
    </Typography>
    <Typography sx={{textAlign:'left', color: 'text.secondary',pb:4 }}>
      Vous trouverez dans cette section les différentes compétences et maîtrise d'outils que j'ai pu acquérir lors de mes différentes expériences en tant que Product Manager.
    </Typography>



    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:"bold", textAlign:"left" }}>
          Analyse de données utilisateurs
        </Typography>
        <Typography sx={{ color: 'text.secondary', overflowWrap: 'break-word', hyphens: 'auto' }}>Maîtrise d'un certain nombre d'outils d'analyse de données et connaissance du SQL.</Typography>
      </AccordionSummary>
      <AccordionDetails >

    <Grid container direction='row' justifyContent='flex-start' spacing={2}>


    <Grid item container direction="column" justifyContent='space-between' md={4}>
    <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
      <Grid item>
      <CardMedia
        component="img"
        width='100%'
        sx={{p:5}}
        image={ga}
        title="Google Analytics"
        loading='lazy'
      />
      </Grid>
      <Grid item>
      <CardContent>
        <Typography align="left" variant="body2" color="text.secondary">
          Analyse des données d'utilisation d'un produit. Cela permet par exemple de connaître le nombre de connexions par type d'appareil à une page spécifique.
        </Typography>
      </CardContent>
      </Grid>
    </Card>
    </Grid>

    <Grid item container direction="column" justifyContent='space-between' md={4}>
    <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
      <Grid item>
      <CardMedia
        component="img"
        width='100%'
        sx={{p:5}}
        image={hotjar}
        title="Hotjar"
        loading='lazy'
      />
      </Grid>
      <Grid item>
      <CardContent>
        <Typography align="left" variant="body2" color="text.secondary" >
          Analyse de l'utilisation de la plateforme par les utilisateurs par le biais de 'heatmaps' et d'enregistrements vidéos des utilisations faites de l'interface.
        </Typography>
      </CardContent>
      </Grid>
    </Card>
    </Grid>


    <Grid item container direction="column" justifyContent='space-between' md={4}>
    <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
      <Grid item>
      <CardMedia
        component="img"
        width='100%'
        sx={{p:5}}
        image={looker}
        title="Looker"
        loading='lazy'
      />
      </Grid>
      <Grid item>
      <CardContent>
        <Typography align="left" variant="body2" color="text.secondary">
          Analyse et visualisation de données via des requêtes simplifiées sur la base de données et la création de dashboards spécifiques au produit.
        </Typography>
      </CardContent>
      </Grid>
    </Card>
    </Grid>



    <Grid item container direction="column" md={4}>

    <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
    <Grid item >
      <CardMedia
        component="img"
        width='100%'
        sx={{p:5}}
        image={pendo}
        title="Pendo"
        loading='lazy'
      />
      </Grid>
      <Grid item>
      <CardContent>
        <Typography align="left" variant="body2" color="text.secondary">
          Analyse de l'utilisation de la plateforme par les utilisateurs par le biais de 'heatmaps', taux de conversions et nombre de clics sur les différentes pages.
          Paramétrage de tutoriels et de sondages personnalisés sur l'interface.
        </Typography>
      </CardContent>
      </Grid>
    </Card>
    </Grid>

    <Grid item container direction="column" justifyContent='space-around' md={4}>
    <Card sx={{ width: 300, height:350, borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between' }}>
    <div align='center'>
      <CardMedia
        component="img"
        sx={{p:4,width:'75%'}}
        image={redash}
        title="Redash"
        loading='lazy'
      />
      </div>
      <CardContent>
        <Typography align="left" variant="body2" color="text.secondary">
        Analyse et visualisation de données via des requêtes SQL personnalisées. Création de dashboards permettant le suivi des objectifs produits 2023.
        </Typography>
      </CardContent>
    </Card>
    </Grid>



    <Grid item container direction="column" justifyContent='space-around' md={4}>
    <Card sx={{ width: 300, height:350, borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between' }}>
    <div align='center'>
      <CardMedia
        component="img"
        sx={{p:4,width:'75%'}}
        image={sql}
        title="SQL"
        loading='lazy'
      />
      </div>
      <CardContent>
        <Typography align="left" variant="body2" color="text.secondary">
          Analyse de données présentes en base de données via l'utilisation de requêtes SQL sur une base de données PostgreSQL.
        </Typography>
      </CardContent>
    </Card>
    </Grid>

    </Grid>


    </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:"bold", textAlign:"left" }}>
          Phases de recherche (Discovery)
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>Recherche utilisateur en continu avec les équipes Product Design et Tech.</Typography>
      </AccordionSummary>
      <AccordionDetails >

      <Grid container direction='row' justifyContent='flex-start' spacing={2}>


      <Grid item container direction="column" justifyContent='space-between' md={4}>
      <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
        <Grid item>
        <div align='center'>
        <CardMedia
          component="img"
          sx={{p:5,width:'75%'}}
          image={cadrage}
          title="Cadrage d'un projet"
          loading='lazy'
        />
        </div>
        </Grid>
        <Grid item>
        <CardContent>
          <Typography align="left" variant="body2" color="text.secondary">
            À chaque sujet de discovery, réalisation d'un document de cadrage permettant de structurer et résumer les objectifs du sujet et les mesures de succès associées.
          </Typography>
        </CardContent>
        </Grid>
      </Card>
      </Grid>


      <Grid item container direction="column" justifyContent='space-between' md={4}>
      <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
        <Grid item>
        <div align='center'>
        <CardMedia
          component="img"
          sx={{p:5,width:'70%'}}
          image={entretien}
          title="Entretiens utilisateurs"
          loading='lazy'
        />
        </div>
        </Grid>
        <Grid item>
        <CardContent>
          <Typography align="left" variant="body2" color="text.secondary">
            Organisation et conduite d'entretien utilisateurs en partenariat avec l'équipe Product Design, dans le but de recueillir des retours qualitatifs sur le produit.
          </Typography>
        </CardContent>
        </Grid>
      </Card>
      </Grid>

      <Grid item container direction="column" justifyContent='space-between' md={4}>
      <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
        <Grid item>
        <div align='center'>
        <CardMedia
          component="img"
          sx={{p:5,width:'85%'}}
          image={figma}
          title="Figma"
          loading='lazy'
        />
        </div>
        </Grid>
        <Grid item>
        <CardContent>
          <Typography align="left" variant="body2" color="text.secondary">
            Utilisation de Figma pour l'analyse de maquettes portant sur de potentielles nouvelles fonctionnalités du produit. Réalisation de maquettes pour des projets perso.
          </Typography>
        </CardContent>
        </Grid>
      </Card>
      </Grid>

      <Grid item container direction="column" justifyContent='space-between' md={4}>
      <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
        <Grid item>
        <CardMedia
          component="img"
          width='100%'
          sx={{p:5}}
          image={miro}
          title="Miro"
          loading='lazy'
        />
        </Grid>
        <Grid item>
        <CardContent>
          <Typography align="left" variant="body2" color="text.secondary">
            Conduite d'ateliers de co-conception UX, de retours utilisateurs via des tableaux Miro. Réalisation de tableaux de story-mapping.
          </Typography>
        </CardContent>
        </Grid>
      </Card>
      </Grid>

      <Grid item container direction="column" justifyContent='space-between' md={4}>
      <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
        <Grid item>
        <CardMedia
          component="img"
          width='100%'
          sx={{p:5}}
          image={sondage}
          title="Sondage auprès des utilisateurs"
          loading='lazy'
        />
        </Grid>
        <Grid item>
        <CardContent>
          <Typography align="left" variant="body2" color="text.secondary">
            Envoi de sondages en interne ou auprès d'utilisateurs du produit via Google Forms, Microsoft Forms ou Typeform pour le recueil de besoins utilisateurs.
          </Typography>
        </CardContent>
        </Grid>
      </Card>
      </Grid>


      </Grid>

      </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:"bold", textAlign:"left", overflowWrap: 'break-word', hyphens: 'auto' }}>
            Phases de développement (Delivery)
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Travail au quotidien avec l'équipe de développement lors des différentes phases.</Typography>
        </AccordionSummary>
        <AccordionDetails >

        <Grid container direction='row' justifyContent='flex-start' spacing={2}>


        <Grid item container direction="column" justifyContent='space-between' md={4}>
        <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
          <Grid item>
          <CardMedia
            component="img"
            width='100%'
            sx={{p:5}}
            image={aha}
            title="Aha!"
            loading='lazy'
          />
          </Grid>
          <Grid item>
          <CardContent>
            <Typography align="left" variant="body2" color="text.secondary">
              Création, gestion et communication des roadmaps produit via le logiciel Aha!
              Analyse et priorisation des retours utilisateurs.
            </Typography>
          </CardContent>
          </Grid>
        </Card>
        </Grid>


        <Grid item container direction="column" justifyContent='space-between' md={4}>
        <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
          <Grid item>
          <CardMedia
            component="img"
            width='100%'
            sx={{p:5,pt:10}}
            image={asana}
            title="Asana"
            loading='lazy'
          />
          </Grid>
          <Grid item>
          <CardContent>
            <Typography align="left" variant="body2" color="text.secondary">
              Création de backlogs, gestion de sprints et création de tickets pour l'équipe de développement via Asana.<br/>
              Remontées et analyses de bugs.
            </Typography>
          </CardContent>
          </Grid>
        </Card>
        </Grid>

        <Grid item container direction="column" justifyContent='space-between' md={4}>
        <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
          <Grid item>
          <CardMedia
            component="img"
            width='100%'
            sx={{p:5, pt:10}}
            image={jira}
            title="Jira"
            loading='lazy'
          />
          </Grid>
          <Grid item>
          <CardContent>
            <Typography align="left" variant="body2" color="text.secondary">
            Création de backlogs, gestion de sprints et création de tickets pour l'équipe de développement via Jira.<br/>
            Remontées et analyses de bugs.
            </Typography>
          </CardContent>
          </Grid>
        </Card>
        </Grid>

        <Grid item container direction="column" justifyContent='space-between' md={4}>
        <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
          <Grid item>
          <CardMedia
            component="img"
            width='100%'
            sx={{p:5}}
            image={postman}
            title="Postman"
            loading='lazy'
          />
          </Grid>
          <Grid item>
          <CardContent>
            <Typography align="left" variant="body2" color="text.secondary">
              Utilisation et tests des APIs du produit via le logiciel Postman.
            </Typography>
          </CardContent>
          </Grid>
        </Card>
        </Grid>

        <Grid item container direction="column" justifyContent='space-between' md={4}>
        <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
          <Grid item>
          <div align='center'>
          <CardMedia
            component="img"
            sx={{p:5,width:'75%'}}
            image={specs}
            title="Spécification de tickets"
            loading='lazy'
          />
          </div>
          </Grid>
          <Grid item>
          <CardContent>
            <Typography align="left" variant="body2" color="text.secondary">
              Rédactions de spécifications, découpage et échanges sur les différents sujets de développement en collaboration avec l'ensemble de l'équipe.
            </Typography>
          </CardContent>
          </Grid>
        </Card>
        </Grid>

        <Grid item container direction="column" justifyContent='space-between' md={4}>
        <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
          <Grid item>
          <div align='center'>
          <CardMedia
            component="img"
            sx={{p:5,width:'75%'}}
            image={test}
            title="Tests fonctionnels"
            loading='lazy'
          />
          </div>
          </Grid>
          <Grid item>
          <CardContent>
            <Typography align="left" variant="body2" color="text.secondary">
              Réalisation des tests fonctionnels sur les nouvelles fonctionnalités et lors des mises à jour du produit, réalisés sur des environnements à la demande ou de test.
            </Typography>
          </CardContent>
          </Grid>
        </Card>
        </Grid>

        </Grid>

        </AccordionDetails>
        </Accordion>


        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:"bold", textAlign:"left", overflowWrap: 'break-word', hyphens: 'auto' }}>
              Réalisation de documentations
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Travail au quotidien avec l'équipe de développement lors des différentes phases.</Typography>
          </AccordionSummary>
          <AccordionDetails >

          <Grid container direction='row' justifyContent='flex-start' spacing={2}>


          <Grid item container direction="column" justifyContent='space-between' md={4}>
          <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between', overflowWrap: 'break-word', hyphens: 'auto'}}>
            <Grid item>
            <CardMedia
              component="img"
              width='100%'
              sx={{p:5,pt:10}}
              image={confluence}
              title="Confluence"
              loading='lazy'
            />
            </Grid>
            <Grid item>
            <CardContent>
              <Typography align="left" variant="body2" color="text.secondary">
                Création d'un espace de documentation centralisé autour du produit sur Confluence : tutoriels, dernières fonctionnalités, roadmap, etc.
              </Typography>
            </CardContent>
            </Grid>
          </Card>
          </Grid>


          <Grid item container direction="column" justifyContent='space-between' md={4}>
          <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
            <Grid item>
            <CardMedia
              component="img"
              width='100%'
              sx={{p:5,pt:10}}
              image={notion}
              title="Notion"
              loading='lazy'
            />
            </Grid>
            <Grid item>
            <CardContent>
              <Typography align="left" variant="body2" color="text.secondary">
                Création de documentation de cadrages, de suivi des projets et de documents de passation sur Notion.
              </Typography>
            </CardContent>
            </Grid>
          </Card>
          </Grid>

          <Grid item container direction="column" justifyContent='space-between' md={4}>
          <Card sx={{ width: 300, height:350,borderRadius:4,display: 'flex', flexDirection: 'column',justifyContent: 'space-between'  }}>
            <Grid item>
            <CardMedia
              component="img"
              width='100%'
              sx={{p:5, pt:10}}
              image={slack}
              title="Slack"
              loading='lazy'
            />
            </Grid>
            <Grid item>
            <CardContent>
              <Typography align="left" variant="body2" color="text.secondary">
              Communication et recueil de retours en interne via Slack : dernières fonctionnalités, annonces de plans de déploiements, etc.
              </Typography>
            </CardContent>
            </Grid>
          </Card>
          </Grid>

          </Grid>

          </AccordionDetails>
          </Accordion>




    </Paper>
    <Copyright/>
    </Grid>
    </Grid>
    </div>
  );
}
