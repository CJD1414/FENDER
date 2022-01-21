import sb from "./StatusBar.module.css"
import classNames from "classnames"
function StatusBar(){
  return(
    <div className={classNames(sb.absolute_bottom, sb.status_bar)}>
    <p className={sb.p}>Status: offline</p>
    </div>
  )
}

export default StatusBar;