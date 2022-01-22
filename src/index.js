import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App';
import Admin from './routes/admin';
import Queue from './routes/queue';

import '@fontsource/roboto/500.css';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="admin" element={<Admin />} />
        <Route path="queue" element={<Queue />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
