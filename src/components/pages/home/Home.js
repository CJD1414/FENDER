import ResponsiveAppBar from "../../Appbar/ResponsiveAppBar.js";
import AutoBox from "../../ComboBox/AutoBox.jsx";
import { Button, Box, Container, Stack, Typography } from '@mui/material';

function Home() {
  return (<>
    <ResponsiveAppBar />

    <Container
      sx={ { flexGrow: 1, margin:0}}
    >
      <Stack spacing={2}>
        <Typography
          variant="h4"
          noWrap
          component="div"
        >
          Request Services
        </Typography>
        <AutoBox name={"Departure"}/>
        <AutoBox name={"Destination"}/>
        <Button variant="contained">Submit</Button>
      </Stack>
    </Container>
  </>);
}

export default Home;