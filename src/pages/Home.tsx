import { Box, Card, CardContent, CardMedia, Link, Typography, useTheme, Container } from '@mui/material';
import ProjectCard from './ProjectCard';

export default function () {
  const theme = useTheme();

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

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 4, justifyContent: 'center' }}>
        <Box>
          <Link href="#/resume" sx={{ textDecoration: 'none' }}>
            <ProjectCard
              title="My Resume"
              href="#/resume"
            >
              <Box sx={{ height: 150, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.grey[100] }}>
                <Typography variant="body2" color="text.secondary">Resume</Typography>
              </Box>
            </ProjectCard>
          </Link>
        </Box>
        
        <Box>
          <Link href="#/projects" sx={{ textDecoration: 'none' }}>
            <ProjectCard
              title="My Projects"
              href="#/projects"
            >
              <Box sx={{ height: 150, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.grey[100] }}>
                <Typography variant="body2" color="text.secondary">Projects</Typography>
              </Box>
            </ProjectCard>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
