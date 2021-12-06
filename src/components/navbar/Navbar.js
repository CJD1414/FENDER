import LogoIcon from "../Logo/LogoIcon";
import nb from "./Navbar.module.css"
import classNames from "classnames";
function Navbar() {
  return (
    <div className={classNames(nb.style, nb.main, nb.absolute_top)}>
      <div className={nb.item_icon}><LogoIcon/></div>
      <h1 className={nb.item}>ERBPS</h1>
    </div>
  )
}

export default Navbar;