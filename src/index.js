import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import App from './routes/App/App';
import Home from './routes/App/Home';
import Admin from './routes/Admin';
import Info from './routes/App/Info';
import Queue from './routes/Queue/Queue';

import ResponsiveAppBar from './components/Appbar/ResponsiveAppBar';
import BottomNavigationBar from './components/BottomNavigation/BottomNavigation';

import '@fontsource/roboto/500.css';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <>
    <ResponsiveAppBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/app/home" />}/>
        <Route path="app" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="info" element={<Info />} />
        </Route>
        <Route path="queue" element={<Queue />} />
        <Route
            path="*"
            element={<Navigate to="/app/home" />}
          />
      </Routes>
    <BottomNavigationBar />
    </BrowserRouter>
  </>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
