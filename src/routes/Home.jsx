import { Container, Typography } from '@mui/material';

export default function Home(){
  return (
    <Container sx={ { flexGrow: 1, margin:0}}>
        <Typography
          variant="h4"
          noWrap
          component="div"
        >
          Home
        </Typography>
    </Container>
  );
}