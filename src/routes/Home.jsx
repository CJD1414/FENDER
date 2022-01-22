import { Container, Typography } from '@mui/material';

export default function Home(){
  return (
    <Container sx={ { flexGrow: 1, margin:0}}>
        <Typography variant="h4" noWrap component="div">
          Home
        </Typography>
        <Typography variant="p"  component="div">
          Fender, the Fully Electronic Next Delivery Errand Runner, is a service robot that will help you transport loads from one location to another. To use, select the departure location (which is where your load currently is), and then select the destination (where the load should be transported).
        </Typography>
    </Container>
  );
}