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
          À propos de moi 👨🏻‍💻
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>Toutes les infos sur le développement et le fonctionnement de l'application.</Typography>
      </AccordionSummary>
      <AccordionDetails >
        <Typography textAlign='justify'>
          Je m'appelle Maxence, et je suis Product Manager depuis plus de 3 ans maintenant.
          D'abord passé par PeopleDoc/UKG durant 2 ans et demi pour travailler sur des produits RH en SaaS,
          j'ai ensuite rejoint La Ruche Qui Dit Oui en tant que Product Manager pour les produits B2B.
          <br/>Malgré la courte durée de cette dernière expérience, j'y ai beaucoup appris !<br/><br/>
          Je recherche maintenant une nouvelle expérience à partir de la mi-mai 2023.
        </Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:"bold", textAlign:"left" }}>
            Informations sur l'application 🤓
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Toutes les infos sur le développement et le fonctionnement de l'application.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign='justify'>
            L'application a été développée en React JS, avec la librairie Material UI. Elle est hébergée et déployée via Render.
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
            Comment me contacter ? ✏️
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Pour me proposer de nouvelles opportunités ou tout simplemenent échanger.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Vous pouvez retrouver dans la barre de menu mes coordonnées présentes dans mon CV, mais également un lien vers mon profil LinkedIn.
            Sinon, le plus simple reste mon addresse e-mail, qui est la suivante :&nbsp;
            <Link href="mailto:maxence.lefort@posteo.net">maxence.lefort@posteo.net</Link>.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Paper>
      </Grid>
      </Grid>
    </div>
  );
}
