import logo from "../../fender_logo.png"
import "./Logo.css"

function Logo() {
  return (
    <img
      src={logo}
      className="logo-main"
      alt="Fender Logo"
    />
  );
}

export default Logo;