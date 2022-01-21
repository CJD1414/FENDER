import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/pages/Home/Home.js';
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

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </div>

  )
}

export default App;
