import { Card, CardContent, CardHeader, CardMedia, Divider, Link, Typography, useTheme, Chip, Box, Button } from "@mui/material";
import { styled } from '@mui/material/styles';

interface ProjectCardProps {
  image?: string;
  title: string;
  tags?: string;
  href?: string;
  children?: React.ReactNode; // 'children' is optional
  demoButton?: React.ReactElement;
  downloadButton?: React.ReactElement;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[10],
  },
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export default function (props: ProjectCardProps) {
  const theme = useTheme()
  
  // Parse tags into individual chips
  const tagArray = props.tags?.split(',').map(tag => tag.trim()) || [];
  
  return (
    <StyledCard>
      <CardHeader
        title={props.title}
        titleTypographyProps={{ variant: 'h6' }}
      />
      <Link href={props.href}
        sx={{
          display:'flex',
          flexDirection: 'column',
          textDecoration:'inherit',
          color:'inherit',
          '&:hover': {
            textDecoration: 'inherit',
            color: 'inherit',
          },
        }}
      >
        {
          props.image?
          <StyledCardMedia
            image={props.image}
            title={props.title}
          />
          : <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.grey[200] }}>
              <Typography variant="body2" color="text.secondary">No Image</Typography>
            </Box>
        }
      </Link>
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}>
        {props.demoButton || props.downloadButton ? (
          <Box sx={{ display: 'flex', gap: 1, mb: 1, flexWrap: 'wrap' }}>
            {props.demoButton && <Box>{props.demoButton}</Box>}
            {props.downloadButton && <Box>{props.downloadButton}</Box>}
          </Box>
        ) : null}
        {tagArray.length > 0 && (
          <Box sx={{ display: 'flex', gap: 0.5, mb: 1, flexWrap: 'wrap' }}>
            {tagArray.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText,
                  '& .MuiChip-label': {
                    fontSize: '0.75rem',
                  }
                }}
              />
            ))}
          </Box>
        )}
        <Divider sx={{ my: 1 }} />
        {props.children && (
          <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
            {props.children}
          </Typography>
        )}
      </CardContent>
    </StyledCard>
  )
}