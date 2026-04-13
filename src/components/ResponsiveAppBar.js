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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from "react-router-dom";
import theme from './../theme';
import profile from './../profile.webp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';

const pages = ['Accueil', 'Mes expériences', 'Mes compétences', 'Mes formations', 'À propos'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // eslint-disable-next-line
  const [status, setStatus] = React.useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
    if (page==="À propos") {
      return "/apropos/";
    }
    else {
      return "/";
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" color="transparent" elevation={0} sx={{borderBottom: '1px solid rgba(47,91,79,0.06)', bgcolor: 'background.paper'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className="App-Box" sx={{ cursor:'pointer', display: { xs: 'none', md: 'flex' }}}>
        <Link to="/">
          <img src={profile} className="App-Logo" loading='lazy' alt="Maxence Lefort"/>
        </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
              color='primary'
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
              onClose={handleCloseNavMenu}
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
                <MenuItem key={page} anchorEl={anchorElNav} component={Link} to={getNavPage(page)}
                onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            color='primary'
            sx={{
              mr: 0,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              FontFamily: 'roboto',
              fontWeight: 1000,
              textDecoration: 'none'
            }}
          >
            Maxence Lefort
          </Typography>
          <Box sx={{
            flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigate(`${getNavPage(page)}`)}
                sx={{my: 2, color: 'text.primary', display: 'block' }}
              >
              {page}
              </Button>
            ))}
          </Box>

          <div>
          <Tooltip title="Mon CV">
            <IconButton aria-label="Mon CV" sx={{mr:{xs:1,md:2},bgcolor:'background.paper',border:'1px solid rgba(16,24,24,0.06)',"&:hover": { transform: 'translateY(-2px)', boxShadow: '0 6px 18px rgba(16,24,24,0.08)' }}} target="_blank" href="https://maxencelefort-drive.mycozy.cloud/public?sharecode=KX9BiMQxzAFU">
                <DescriptionIcon tabIndex={0} />
            </IconButton>
          </Tooltip>
          </div>

          <Tooltip title="Mon profil LinkedIn">
            <IconButton aria-label="Mon profil LinkedIn" sx={{bgcolor:'background.paper',border:'1px solid rgba(16,24,24,0.06)',"&:hover": { transform: 'translateY(-2px)', boxShadow: '0 6px 18px rgba(16,24,24,0.08)' }}} target="_blank" href="https://www.linkedin.com/in/maxence-lefort/">
                <LinkedInIcon tabIndex={0} />
            </IconButton>
          </Tooltip>

        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
