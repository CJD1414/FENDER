import './App.css';
import {
  Link,
  Outlet
} from "react-router-dom";

import Home from './components/pages/Home/Home.js';
import BottomNavigationBar from "./components/BottomNavigation/BottomNavigation.js"

/*
options={
          {
            "ERB335A": 
            {
              "text" : "ERB 335A"
            },
            "ERB335B": 
            {
              "text" : "ERB 335B"
            },
          }
*/

export default function App() {
  return (
  <div>
    <Home />
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
