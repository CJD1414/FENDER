import LogoIcon from "../logo/LogoIcon";
import "../../App.css"
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar absolute_top">
      <div className="nb_item-left"><LogoIcon/></div>
      <h1 className="nb_item-left pd-l-10">ERBPS Fender</h1>
    </div>
  )
}

export default Navbar;