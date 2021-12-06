import logo from "../../fender_logo.png"
import logos from"./Logo.module.css"

function LogoIcon() {
  return (
    <img
    src={logo}
    className={logos.icon}
      alt="Fender Logo Icon"
    />
  );
}

export default LogoIcon;