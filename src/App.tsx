import * as React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  MemoryRouter,
  Route,
  Routes,
  Link,
  BrowserRouter
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ForumIcon from '@mui/icons-material/Forum';
import KitchenIcon from '@mui/icons-material/Kitchen';
import RocketIcon from '@mui/icons-material/Rocket';
import SchoolIcon from '@mui/icons-material/School';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Resume from './pages/Resume';

const drawerWidth = 240;

interface ListItemList {
  text: string,
  icon: JSX.Element,
  route: string
}

function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <BrowserRouter>{children}</BrowserRouter>;
}

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const listItems = [
    {
      text: 'Home',
      icon: <HomeIcon/>,
      route: '/'
    },
    {
      text: 'Resume',
      icon: <ArticleIcon/>,
      route: '/resume'
    },
    {
      text: 'LinkedIn',
      icon: <LinkedInIcon/>,
      route: 'https://www.linkedin.com/in/ian-prater-94944b192/'
    },
    {
      text: 'Github',
      icon: <GitHubIcon/>,
      route: 'https://github.com/IanPrater'
    }
  ];

  const projectListItems = [
    {
      text: 'gato',
      icon: <ForumIcon/>,
      route: 'http://75.81.136.146/gato/'
    },
    {
      text: 'Fridge Friend',
      icon: <KitchenIcon/>,
      route: '/'
    },
    {
      text: 'In Browser Orbit Simulator',
      icon: <RocketIcon/>,
      route: 'https://ianriley237.github.io/Orbit-Animation/'
    },
    {
      text: 'Domes',
      icon: <SchoolIcon/>,
      route: '/'
    }
  ];

  const gameListItems = [
    {
      text: 'Slag',
      icon: <VideogameAssetIcon/>,
      route: 'https://gamejolt.com/games/Slag/340783'
    },
    {
      text: 'UE5',
      icon: <VideogameAssetIcon/>,
      route: '/'
    },
    {
      text: 'Druidic Calamity',
      icon: <VideogameAssetIcon/>,
      route: 'https://ucm-mules.itch.io/druidic-calamity'
    },
    {
      text: 'QWOP-Like',
      icon: <VideogameAssetIcon/>,
      route: 'https://ianriley237.github.io/Game%20Development/QWOPLike/'
    }
  ];

  const listElement = (list: ListItemList[]) => {
    return list.map((item) => (
      <ListItem key={item.text} disablePadding>


        {item.route.startsWith('/') ? ( // Check if the route starts with '/'
          <ListItemButton component={Link} to={item.route}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ) : (
          <ListItemButton
            component="a" // Use anchor tag for external links
            href={item.route}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        )}





      </ListItem>
    ))
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {listElement(listItems)}
      </List>
      <Divider />
      <List>
        {listElement(projectListItems)}
      </List>
      <Divider />
      <List>
        {listElement(gameListItems)}
      </List>
    </div>
  );


  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Ian Prater
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {/* Mobile Screen Drawer */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          {/* Desktop Screen Drawer */}
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, display: 'flex', flexDirection: 'column', height: '100vh' }}
        >
          <Toolbar/>
          
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Box>
        </Box>
      </Box>
      
    </Router>
  );
}
