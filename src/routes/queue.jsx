import { Container, Typography } from '@mui/material';

export default function Queue() {
  return (
    <Container sx={{ flexGrow: 1, margin: 0 }}>
      <Typography variant="h4" noWrap component="div">
        Queue
      </Typography>
      <Typography variant="p" noWrap component="div">
        <p>Working on job <span id="current_job_id">-1</span>...</p>
      </Typography>

      <Container>
        <Typography variant="h5" noWrap component="div">
          Jobs
        </Typography>
        <Container>
        </Container>
      </Container>
    </Container>
  );
}