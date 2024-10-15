import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography, useTheme } from '@mui/material';

// Define the Props type including children
interface ItemCardProps {
  image?: string;
  age?: number;
  children?: React.ReactNode; // 'children' is optional
}

export default function () {


  const theme = useTheme();
  const ItemCard = (props: ItemCardProps) => {
    
    return (
      <Card sx={{
        m: 5,
        display: 'flex',
        maxWidth: '800px'
      }}>

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

      </Card>
    )
  }

  return (
    <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
      <Typography variant='h2' sx={{mb: 5}}>
        Welcome to my Webpage!
      </Typography>

      <Typography variant='h3'>
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

      
      <ItemCard image='/images/Projects Square.png'>
        <Typography variant='h5'>
          Take a look at some of my projects!
        </Typography>
      </ItemCard>
      
      <ItemCard image='/images/Games Square.png'>
        <Typography variant='h5'>
          Check out my Game Dev projects too!
        </Typography>
      </ItemCard>
      
      <ItemCard>
        <Typography variant='h5'>
          Links
        </Typography>
      </ItemCard>
      </Box>

    </div>
  );
}
