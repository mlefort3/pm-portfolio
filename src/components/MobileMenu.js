import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from "react-router-dom";


const options = ['La contraception masculine', "La charge mentale", 'La masculinité toxique', "Le patriarcat", "La culture du viol"];


export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();


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

  const handleMenuItemClick = (event, option, index) => {
    navigate(getNavPage(option));
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'primary.main',borderRadius:3,ml:5,my:2, }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}

        >
          <ListItemText
            primary="Liste des articles"
            sx={{color:"white", fontWeight:"bold"}}
          />
          <KeyboardArrowDownIcon sx={{color:"white",ml:1}}/>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, option, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
