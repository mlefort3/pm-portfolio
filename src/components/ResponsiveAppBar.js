import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { Link, useNavigate } from "react-router-dom";
import theme from './../theme';
import logo from './../together.png';
import profile from './../profile.png';
import validateToken from './../requests/ValidateToken';
import LogoutRequest from './../requests/LogoutRequest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';

const pages = ['Accueil', 'Mes expériences', 'Mes compétences', 'Mes formations', 'À propos'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // eslint-disable-next-line
  const [status, setStatus] = React.useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  const getNavPage = (page) => {
    if (page==="Mes expériences") {
      return "/experiences/";
    }
    if (page==="Mes compétences") {
      return "/competences/";
    }
    if (page==="Mes formations") {
      return "/formations/";
    }
    else {
      return "/";
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box className="App-Box" sx={{ cursor:'pointer', display: { xs: 'none', md: 'flex' }}}>
        <Link to="/">
          <img src={profile} className="App-Logo" alt="logo"/>
        </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            color='secondary'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              FontFamily: 'roboto',
              fontWeight: 1000,
              textAlign: 'center',
              textDecoration: 'none',
            }}
          >
            Maxence Lefort - Product Manager
          </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, cursor:'pointer', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                cursor:'pointer',
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => navigate(`${getNavPage(page)}`)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            color='secondary'
            sx={{
              mr: 0,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              FontFamily: 'roboto',
              fontWeight: 1000,
              textDecoration: 'none'
            }}
          >
            Maxence Lefort - Product Manager
          </Typography>
          <Box sx={{
            flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigate(`${getNavPage(page)}`)}
                sx={{my: 2, color: 'white', display: 'block' }}
              >
              {page}
              </Button>
            ))}
          </Box>

          <Tooltip title="Mon CV">
            <IconButton sx={{mr:2,backgroundColor:'white',"&:hover": { color: "#d4d4d4" }}} target="_blank" href="https://cloud.leviia.com/s/ZnIy.5fYHRqNwMtXXqfQ">
                <DescriptionIcon/>
            </IconButton>
          </Tooltip>

          <Tooltip title="Mon profil LinkedIn">
            <IconButton sx={{backgroundColor:'white',"&:hover": { color: "#d4d4d4" }}} target="_blank" href="https://www.linkedin.com/in/maxence-lefort/">
                <LinkedInIcon/>
            </IconButton>
          </Tooltip>

        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
