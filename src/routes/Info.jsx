import { Container, Stack, Typography } from '@mui/material';

export default function Info() {
  return (
    <Container sx={{ flexGrow: 1, margin: 0 }}>
      <Stack spacing={1}>
        <Typography variant="h4" noWrap component="div">
          Info
        </Typography>


        <Container>
          <Typography variant="h5" noWrap component="div">
            Fender Status
          </Typography>
          <Container>
            <Typography variant="p" noWrap component="div">
              <p>Current status: <span id="current_status">offline</span></p>
              <p>Last Location: <span id="last_location">ERB 335A</span></p>
              <p>Battery: <span id="battery"> what battery?</span></p>
            </Typography>
          </Container>
        </Container>


        <Container>
          <Typography variant="h5" noWrap component="div">
            Service Status
          </Typography>
          <Container>
            <Typography variant="p" noWrap component="div">
              <p>Current job ID: <span id="current_job_id">offline</span></p>
              <p>Total number of jobs: <span id="num_jobs">ERB 335A</span></p>
            </Typography>
          </Container>
        </Container>

      </Stack>
    </Container>
  );
}