import { Container, Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container sx={{ flexGrow: 1, margin: 0 }}>
      <Stack spacing={1}>
        <Typography variant="h4" noWrap component="div">
          Home
        </Typography>

        <Typography variant="h5" noWrap component="div">
          About
        </Typography>
        <Container>
          <Typography variant="p" component="div">
            <p>Fender, the fully electronic next delivery device errand runner, is a service robot that helps personel transfer loads around the ERB.</p>
          </Typography>
        </Container>


        <Typography variant="h5" noWrap component="div">
          How to Use
        </Typography>
        <Container>
          <Typography variant="p" component="div">
            <p>To use, select the departure location (which is where your load currently is), and then select the destination (where the load should be transported).</p>
          </Typography>
        </Container>

        <Typography variant="h5" noWrap component="div">
          Support
        </Typography>
        <Container>
          <Typography variant="p" component="div">
          <p>Phone Number: <span id="support_number">None</span></p>
          <p>E-mail: <span id="support_email">None</span></p>
          </Typography>
        </Container>
      </Stack>

    </Container>
  );
}