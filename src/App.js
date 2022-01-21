import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Dropdown from './components/dropdown/Dropdown';
import Button from "./components/button/Button";
import Home from './components/pages/home/Home';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="app-ct-l">
        <Dropdown header="Initial Destination" options={
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
        }/>
        <Dropdown header="Final Destination" options={
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
        }/>
        <Button label="Queue"/>
      </div>
    
      <div className="app-ct-r app-ct-style">
        <Button label="Queue"/>
      </div>

    </div>
  );
}

export default App;
