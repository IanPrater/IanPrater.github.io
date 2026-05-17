import * as React from 'react';
import {
  Route,
  Routes,
  Link
} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ForumIcon from '@mui/icons-material/Forum';
import KitchenIcon from '@mui/icons-material/Kitchen';
import RocketIcon from '@mui/icons-material/Rocket';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import Home from './pages/Home';
import Resume from './pages/Resume';
import { Collapse, useTheme } from '@mui/material';
import { ThemeContext } from './providers/theme-provider';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

const drawerWidth = 240;

interface ListItemList extends ListItemButtonProps{
  text: string,
  icon: JSX.Element,
  route: string
}

export default function ResponsiveDrawer() {
  const location = useLocation();
  const { themeMode, setThemeMode } = React.useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [projectsOpen, setProjectsOpen] = React.useState(false);
  const theme = useTheme();

  React.useEffect(() => {
    setProjectsOpen(location.pathname == '/projects')
  }, [location]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setThemeMode(themeMode === 'light' ? 'dark' : 'light')
      }
    }),
    [themeMode]
  )

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

  function ListItemLink(props: ListItemList) {
    return (
      <ListItemButton component={Link} to={props.route}>
        <ListItemIcon>
          {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItemButton>
    );
  }

  function MyListItem (item: ListItemList) {
    const [isHovering, setIsHovering] = React.useState(false);
    return (
      <Box onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <ListItem key={item.text} disablePadding>
          {item.route.startsWith('/') ? ( // Check if the route starts with '/'
            <ListItemLink text={item.text} route={item.route} icon={item.icon}/>
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
              {isHovering ? <OpenInNewIcon fontSize='small'/> : <></>}
            </ListItemButton>
          )}
        </ListItem>
      </Box>
    )
  }

  const listElement = (list: ListItemList[]) => {
    return list.map(MyListItem)
  }

  const drawer = (
   <div>
     <Toolbar>
     <ListItemButton  component={Link} to={"/"}>
       <Typography variant="h5">
         Ian Prater
       </Typography>
     </ListItemButton>
     </Toolbar>
     <Divider />
     <List>
       {listElement(listItems)}
     </List>
   </div>
 );


  return (
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
            {/* <Box sx={{flexGrow: 1}}></Box> */}
            <IconButton sx={{ml:1}} onClick={colorMode.toggleColorMode} color='inherit'>
              {theme.palette.mode === 'dark' ? <Brightness4/> : <Brightness7/>}
            </IconButton>
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
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <Toolbar/>
          
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Box>
        </Box>
      </Box>
  );
}
