import { Box, Card, CardContent, CardMedia, Link, Typography, useTheme, Container, Divider, Grid, Button } from '@mui/material';
import ProjectCard from './ProjectCard';
import OpenIcon from '@mui/icons-material/OpenInNew';
import DownloadIcon from '@mui/icons-material/Download';

export default function () {
  const theme = useTheme();

  // Regular projects data
  const regularProjects = [
    <ProjectCard
      title="gato"
      image='/images/gato.png'
      tags="HTML5, CSS3, Javascript, jQuery, PHP, MySQL"
      href='http://75.81.136.42/gato/'
      demoButton={
        <Button
          variant="contained"
          endIcon={<OpenIcon/>}
          sx={{
            width: '100%',
            m: 1,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            }
          }}
          href='http://75.81.136.42/gato/'
          target='_blank'
        >
          View Demo
        </Button>
      }
    >
        gato is my senior project that I worked on with a partner. We developed the full-stack for the
        project. I was in charge of developing most of the back-end code and processes. This site allows
        users who have created a profile to interact with the website like a forum. Users can use BBCode
        to format their posts however they like. Users can also have ranks associated with their
        accounts that allow them to take disciplinary action on misbehaving users.
        gato is now hosted on my own machine using Docker.
    </ProjectCard>,
    <ProjectCard
      title="Fridge Friend"
      image='/images/FF.png'
      tags="Android Development Kit, Java, XML, SQLite"
      href='/Fridge Friend.apk'
      downloadButton={
        <Button
          variant="contained"
          startIcon={<DownloadIcon/>}
          sx={{
            width: '100%',
            m: 1,
            backgroundColor: theme.palette.secondary.main,
            '&:hover': {
              backgroundColor: theme.palette.secondary.dark,
            }
          }}
          href='/Fridge Friend.apk'
        >
          Download APK
        </Button>
      }
    >
        Fridge Friend is an Android application I made with a partner that is currently on the play store.
        It allows users to record their food products and the respective expiration dates into an SQLite
        database. The app is designed to make the user aware of any near expired food they have. The app
        also includes a shopping list and notepad. The goal of this application was to reduce the amount
        of wasted food that could have otherwise been used. While my partner focused on visual design and
        art, my role in Fridge Friend's development was implementing the SQLite database and all interaction
        and navigation.
    </ProjectCard>,
    <ProjectCard
      title="In Browser Orbit Simulator"
      image='/images/Orbit.png'
      tags="HTML5, CSS3, Javascript, jQuery"
      href="https://ianriley237.github.io/Orbit-Animation/"
      demoButton={
        <Button
          variant="contained"
          endIcon={<OpenIcon/>}
          sx={{
            width: '100%',
            m: 1,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            }
          }}
          href='https://ianriley237.github.io/Orbit-Animation/'
          target='_blank'
        >
          View Demo
        </Button>
      }
    >
        I am fascinated by the ever-expanding cosmos and astrophysics. As an exercise to myself, I wanted
        to explore astrophysics by creating this orbit simulator. My primary goal with this project is to
        investigate the N-body problem, the problem of predicting where celestial objects will be in a
        system of more than two objects. Currently (Aug 2024), I am working on a project to build a more
        accurate version that runs calculations in C++ with an interactive Next.js front-end.
    </ProjectCard>
  ];

  // Game projects data
  const gameProjects = [
    <ProjectCard
      title="Slag"
      image='/images/Slag.png'
      tags="Unity, C#, Blender"
      href='https://gamejolt.com/games/Slag/340783'
      demoButton={
        <Button
          variant="contained"
          endIcon={<OpenIcon/>}
          sx={{
            width: '100%',
            m: 1,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            }
          }}
          href='https://gamejolt.com/games/Slag/340783'
          target='_blank'
        >
          View Demo
        </Button>
      }
    >
        Slag was my final project for the Unity course I attended in college. I was the sole developer
        for this project, and I learned vector math and raytracing while building this project.
    </ProjectCard>,
    <ProjectCard
      title="Procedural Generation in UE5"
      image='/images/ProceduralTest.gif'
      tags="Unreal Engine 5, C++, Blueprints, Multithreading"
      downloadButton={
        <Button
          variant="contained"
          startIcon={<DownloadIcon/>}
          sx={{
            width: '100%',
            m: 1,
            backgroundColor: theme.palette.secondary.main,
            '&:hover': {
              backgroundColor: theme.palette.secondary.dark,
            }
          }}
          href='http://75.81.136.42/DataDrop.zip'
        >
          Download Demo (~355MB)
        </Button>
      }
    >
      I am currently exploring Unreal Engine 5 with the aspiration to make a complete game to ship.
      I got started by building an endlessly generating realm of cubes for the player to explore.
      It currently isn't much, but I have already learned so much about Unreal and am elated to have
      the opportunity to learn more. I look forward to how far I can take it.
    </ProjectCard>,
    <ProjectCard
      title="Druidic Calamity"
      image='/images/DC.png'
      tags="Unity, C#"
      href="https://ucm-mules.itch.io/druidic-calamity"
      demoButton={
        <Button
          variant="contained"
          endIcon={<OpenIcon/>}
          sx={{
            width: '100%',
            m: 1,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            }
          }}
          href='https://ucm-mules.itch.io/druidic-calamity'
          target='_blank'
        >
          View Demo
        </Button>
      }
    >
        I was lucky enough to attend Texas A&M's yearly gamejam called Chillennium in 2018. My
        University sent one team of four to the Texas A&M campus to participate. That year's theme
        was "Transformation". Our idea was to have the player be a druid that can transform into
        different animals to solve puzzles. Unfortunately, our team did not use any organized version
        control. This caused us to spend needless time fixing compatibility errors involved with
        moving assets around. The final build of our game is broken and incomplete, but I am very
        happy to have had that experience.
    </ProjectCard>,
    <ProjectCard
      title="QWOP-Like game"
      image='/images/qwoplike.png'
      tags="HTML5, CSS3, Javascript, jQuery"
      href="https://ianriley237.github.io/Game%20Development/QWOPLike/"
      demoButton={
        <Button
          variant="contained"
          endIcon={<OpenIcon/>}
          sx={{
            width: '100%',
            m: 1,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            }
          }}
          href='https://ianriley237.github.io/Game%20Development/QWOPLike/'
          target='_blank'
        >
          View Demo
        </Button>
      }
    >
        Inspired by the games by Bennete Foddy, I wanted to create a kind of game that was unique
        in the way that the player moved around. In this game, the player moves around by pointing
        a leg toward a surface, and propelling their foot into the surface to launch their body in
        the desired direction. For now, there is no real goal in the game. It is just a proof of concept.
        <strong>Controls:</strong>
        <ul>
        <li>WASD and IJKL to direct each leg</li>
        <li>LShift and ; to extend each foot</li>
        </ul>
    </ProjectCard>
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant='h2' sx={{mb: 3, fontWeight: 'bold'}} align="center">
        Welcome!
      </Typography>

      <Typography variant='h5' align="center" sx={{mb: 5}}>
        <Box component={'span'}>My name is </Box>
        <Box
          component={'strong'}
          sx={{
            color: theme.palette.primary.main
          }}
        >
          Ian Prater
        </Box>
        , I am a software engineer who enjoys exploring game development and AI.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
        My Projects
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
        {regularProjects.map((card, index) => (
          <Box key={`regular-${index}`}>
            {card}
          </Box>
        ))}
      </Box>

        <br/>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h5" component="h3" gutterBottom align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
        Game Development Projects
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 3 }}>
        {gameProjects.map((card, index) => (
          <Box key={`game-${index}`}>
            {card}
          </Box>
        ))}
      </Box>
    </Container>
  );
}
