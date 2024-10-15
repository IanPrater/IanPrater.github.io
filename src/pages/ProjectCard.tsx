import { Card, CardContent, CardMedia } from "@mui/material";

interface ProjectCardProps {
  image?: string;
  video?: string;
  children?: React.ReactNode; // 'children' is optional
}

export default function (props: ProjectCardProps) {
  return (
    <Card sx={{
      m: 1,
      display: 'flex',
      flexDirection: 'column',
      height: 'fit-content',
      flex: 1
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
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        {props.children}
      </CardContent>


    </Card>
  )
}