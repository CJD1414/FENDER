import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from '@mui/material';
import { House } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import RestoreIcon from '@mui/icons-material/Restore';
import { 
  Link 
} from 'react-router-dom'

export default function BottomNavigationBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Queue" icon={<RestoreIcon />} component={Link} to="/app/queue"/>
        <BottomNavigationAction label="Home" icon={<House />} component={Link} to="/app/home"/>
        <BottomNavigationAction label="Info" icon={<InfoIcon />} component={Link} to="/app/info"/>
      </BottomNavigation>
    </Paper>
  );
}
