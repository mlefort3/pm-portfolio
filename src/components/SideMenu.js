import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      {...props}
    />
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function SideMenu( {pages, pagenumber} ) {
  const [value, setValue] = React.useState(pagenumber);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getNavPage = (page) => {
    if (page==="Mon profil") {
      return "/profil";
    }
    if (page==="Mes paramètres") {
      return "/parametres";
    }
    if (page==="Ma contraception") {
      return "/macontraception";
    }
    if (page==="La contraception masculine") {
      return "/sinformer/contraception";
    }
    if (page==="La charge mentale") {
      return "/sinformer/chargementale";
    }
    if (page==="La masculinité toxique") {
      return "/sinformer/masculinite";
    }
    if (page==="Le patriarcat") {
      return "/sinformer/patriarcat";
    }
    if (page==="La culture du viol") {
      return "/sinformer/cultureduviol";
    }
    else {
      return "/";
    }
  };

  return (
    <div>
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: {xs:'none',md:'flex'}, height:'100%' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
      {pages.map((page, index) => (
        <LinkTab key={page} label={page} href={getNavPage(page)}/>
      ))}
      </Tabs>
    </Box>
    </div>

  );
}
