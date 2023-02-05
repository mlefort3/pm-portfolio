import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Link} from "@mui/material";

export default function About() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
    <Grid container justifyContent="center" sx={{mt:5}}>
    <Grid item md={9} xs={12} sx={{mx:{xs:5}}}>
    <Paper>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:"bold", textAlign:"left" }}>
            Informations sur l'application 🤓
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Toutes les infos sur le développement et le fonctionnement de l'application.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Information à venir.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:"bold", textAlign:"left" }}>
            Pourquoi créer un compte ? 🤔
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Tout ce que vous devez savoir sur la création de compte.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Information à venir.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:"bold", textAlign:"left", pr:5 }}>Comment sont gérées vos données ? 🗄</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Le stockage des données de votre compte sur l'application.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Information à venir.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:"bold", textAlign:"left" }}>
            Comment nous contacter ? ✏️
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            En cas de problèmes sur l'application ou pour proposer des améliorations.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Si vous rencontrez des soucis sur l'application ou si souhaitez transmettre des idées d'amélioration de l'application et de son contenu, merci de contacter <Link href="mailto:des.hommes.feministes@gmail.com">des.hommes.feministes@gmail.com</Link>.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Paper>
      </Grid>
      </Grid>
    </div>
  );
}
