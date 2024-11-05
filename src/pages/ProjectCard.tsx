import { Card, CardContent, CardHeader, CardMedia, Divider, Link, Typography, useTheme } from "@mui/material";

interface ProjectCardProps {
  image?: string;
  title: string;
  tags?: string;
  href?: string;
  children?: React.ReactNode; // 'children' is optional
}

export default function (props: ProjectCardProps) {
  const theme = useTheme()
  return (
    <Card sx={{
      m: 1,
      flex: 1,
      boxShadow: theme.shadows[5]
    }}>

        <CardHeader title={props.title}/>
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Link href={props.href}
          sx={{
            display:'flex',
            flexDirection: 'column',
            textDecoration:'inherit',
            color:'inherit',
            '&:hover': {
              textDecoration: 'inherit', // Prevent underline on hover
              color: 'inherit',           // Keep the color on hover
            },
            }}>
              {
                props.image? 
                <CardMedia
                component='img'
                sx={{width: '100%'}}
                image={props.image}
                />
                : <>Demo Image</>
              }
          </Link>          
          <Typography color="#888888">
            {props.tags}
          </Typography>
          <Divider/>

          {props.children}
        </CardContent>

    </Card>
  )
}