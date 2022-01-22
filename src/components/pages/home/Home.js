import ResponsiveAppBar from "../../Appbar/ResponsiveAppBar.js";
import { Box, Container, Typography } from '@mui/material';

function Home() {
  return (<>
    <ResponsiveAppBar />
    <main>
      <Container fixed="xl">
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
        >
        Request Services
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>

        </Box>
      </Container>
    </main>
  </>);
}

export default Home;