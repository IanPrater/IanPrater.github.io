import { Box, Card, CardContent, CardMedia, Link, Typography, useTheme } from '@mui/material';

// Define the Props type including children
interface ItemCardProps {
  image?: string;
  href?: string;
  children?: React.ReactNode; // 'children' is optional
}

export default function () {


  const theme = useTheme();
  const ItemCard = (props: ItemCardProps) => {
    
    return (
      <Card sx={{
        m: 5,
        maxWidth: '620px',
        boxShadow: theme.shadows[10]
      }}>
        <Link href={props.href} sx={{display:'flex', textDecoration:'inherit', color:'inherit'}}>
          <CardContent sx={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Box flex={1}/>
            {props.children}
            <Box flex={1}/>
          </CardContent>
          <Box flex={1}/>
          <CardMedia
            component='img'
            sx={{maxWidth: 200, minWidth: 200, height: '100%', flex: 1}}
            image={props.image}
          />
        </Link>
      </Card>
    )
  }

  return (
    <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
      <Typography variant='h2' sx={{mb: 5}}>
        Welcome!
      </Typography>

      <Typography variant='h5'>
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

      <Box flex={0}>
        
        <ItemCard href="#/resume">
          <Typography variant='h2' fontWeight={'bold'}>
            My Resume
          </Typography>
        </ItemCard>

        <ItemCard image='/images/Projects Square.png' href="#/projects">
          <Typography variant='h2' fontWeight={'bold'}>
            My Projects
          </Typography>
        </ItemCard>
        
        <ItemCard image='/images/Games Square.png' href="#/game-projects">
          <Typography variant='h2' fontWeight={'bold'}>
            Game Dev projects
          </Typography>
        </ItemCard>
        
        {/* <ItemCard>
          <Typography variant='h5'>
            Links
          </Typography>
        </ItemCard> */}
      </Box>

    </div>
  );
}
