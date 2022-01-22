import {
  Outlet
} from "react-router-dom";

import ResponsiveAppBar from "./components/Appbar/ResponsiveAppBar";
import AutoBox from "./components/ComboBox/AutoBox";
import { Button, Container, Stack, Typography } from '@mui/material';
import BottomNavigationBar from "./components/BottomNavigation/BottomNavigation"

export default function App() {
  return (
    <div>
      <ResponsiveAppBar />

      <Container sx={{ flexGrow: 1, margin: 0 }}>
        <Stack spacing={2}>
          <Typography
            variant="h4"
            noWrap
            component="div"
          >
            Request Services
          </Typography>
          <AutoBox name={"Departure"} />
          <AutoBox name={"Destination"} />
          <Button variant="contained">Submit</Button>
        </Stack>
      </Container>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
      </nav>
      <Outlet />
      <BottomNavigationBar />
    </div>

  )
}
