import './App.css';
import Navbar from "./components/navbar/Navbar"
import Dropdown from './components/dropdown/Dropdown';
import Button from "./components/button/Button"

function App() {
  return (
    <div className="app">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Navbar/>
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
