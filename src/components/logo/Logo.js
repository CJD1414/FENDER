import logo from "../../fender_logo.png"
import logos from"./Logo.module.css"

function Logo() {
  return (
    <img
      src={logo}
      className={logos.main}
      alt="Fender Logo"
    />
  );
}

export default Logo;