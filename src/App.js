import Navbar from "./components/Navbar/Navbar"
import Dropdown from './components/Dropdown/Dropdown';
import Button from "./components/Button/Button1"
import StatusBar from './components/StatusBar/StatusBar';
import app from './App.module.css';
import classNames from "classnames";

function App() {
  return (
    <div className={app.main}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Navbar/>
      <StatusBar/>
      <div className={app.panel_left}>
        <div className={app.ct}>
          <div className={app.pd_15}>
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
            <div className={app.btn_queue}><Button label="Queue"/></div>
          </div>

        </div>

      </div>

      <div className={classNames(app.panel_right, app.panel_right_style)}>
        <div className={app.ct}>
          <div className={app.pd_15, app.center_txt}>
            <h2>Fender</h2>
            <h3>Queue position</h3>
            <p>N/A</p>
            <h3>Current position</h3>
            <p>N/A</p>
            <h3>Target destination</h3>
            <p>N/A</p>
          </div>
          <div className={app.pd_15, app.ct_h_55}>
            <div className={classNames(app.pd_15, app.panel)}>
              <h2>Instructions</h2>
              <p>And this is where I would put instructions... IF I HAD ANY.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App;
