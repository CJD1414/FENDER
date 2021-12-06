import LogoIcon from "../logo/LogoIcon";
import "../../App.css"
import "./Navbar.css"

function Navbar() {
  return (
    <div className="nb style absolute-top">
      <div className="layout">
        <h1 className="nb_item">ERBPS Fender</h1>
        <div className="nb_item"><LogoIcon/></div>
        <p>test</p>
      </div>

    </div>
  )
}

export default Navbar;