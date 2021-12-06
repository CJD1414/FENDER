import logo from "../../fender_logo.png"
import "./Logo.css"

function LogoIcon() {
  return (
    <img
      src={logo}
      className="logo-icon"
      alt="Fender Logo Icon"
    />
  );
}

export default LogoIcon;