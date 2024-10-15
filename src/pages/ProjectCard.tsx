import { Card, CardContent, CardHeader, CardMedia, Divider, Typography } from "@mui/material";

interface ProjectCardProps {
  image?: string;
  video?: string;
  title: string;
  tags?: string;
  children?: React.ReactNode; // 'children' is optional
}

export default function (props: ProjectCardProps) {
  return (
    <Card sx={{
      m: 1,
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }}>
      <CardHeader title={props.title}/>
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>

        {
          props.image? 
          <CardMedia
          component='img'
          sx={{width: '100%'}}
          image={props.image}
          />
          : <></>
        }
        {
          props.video? 
          <CardMedia
          component='iframe'
          sx={{width: '100%'}}
          src={props.video}
          />
          : <></>
        }
        
        <Typography color="#888888">
          {props.tags}
        </Typography>
        <Divider/>

        {props.children}
      </CardContent>


    </Card>
  )
}